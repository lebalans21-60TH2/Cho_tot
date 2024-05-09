const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");
const bodyParser = require("body-parser");
const News = require("../model/news");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const User = require("../model/user");

// Tạo bài đăng
// Bài đăng bị gán cứng id
router.post(
  "/create-news",
  isAuthenticated,
  upload.single("imageBanner"),
  async (req, res, next) => {
    try {
      // const userId = req.body.userId;
      const userId = "663842c65cb13990f257a204";
      const author = await User.findById(userId);
      const { title, categories, description, keyword, content } = req.body;

      let news = await News.findOne({ title });
      if (news) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Error deleting file" });
          }
        });
        return next(new ErrorHandler("Danh mục đã tồn tại", 400));
      }
      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const newsData = req.body;
      newsData.categories = categories;
      newsData.description = description;
      newsData.keyword = keyword;
      newsData.content = content;
      newsData.imageBanner = fileUrl;
      newsData.author = author;

      news = await News.create(newsData);

      res.status(201).json({
        success: true,
        news,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// sửa bài đăng
router.put(
  "/update-news/:id",
  // isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { title, categories, description, content } = req.body;

      const news = await News.findById(req.params.id);

      if (!news) {
        return next(new ErrorHandler("Không tìm thấy bài đăng!", 400));
      }

      news.title = title;
      news.categories = categories;
      news.description = description;
      news.content = content;

      await news.save();

      res.status(201).json({
        success: true,
        news,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Thêm key word cho bài đăng
router.put(
  "/add-keyword/:id",
  isAuthenticated,

  catchAsyncErrors(async (req, res, next) => {
    try {
      const news = await News.findById(req.params.id);

      const sameKeyword = news.keyword.find(
        (keyword) => keyword.title === req.body.title
      );
      if (sameKeyword) {
        return next(new ErrorHandler(`${req.body.title} Keyword đã tồn tại!`));
      }

      const existsKeyword = news.keyword.find(
        (keyword) => keyword._id === req.body._id
      );

      if (existsKeyword) {
        Object.assign(existsKeyword, req.body);
      } else {
        // add the new address to the array
        news.keyword.push(req.body);
      }

      await news.save();
      res.status(200).json({
        success: true,
        news,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Xóa keyword của bài đăng
// gán cứng id
router.delete(
  "/delete-keyword/:id",

  catchAsyncErrors(async (req, res, next) => {
    try {
      // const categoriesId = req.categories._id;
      const newsID = "663c33266d093327d1ae6863";
      const keywordID = req.params.id;

      await News.updateOne(
        {
          _id: newsID,
        },
        { $pull: { keyword: { _id: keywordID } } }
      );

      const news = await News.findById(newsID);

      res.status(200).json({ success: true, news });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// Lấy tất cả danh sách bài đăng
router.get(
  "/get-all-news",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const news = await News.find();
      res.status(201).json({
        success: true,
        news,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Xóa bài đăng
router.delete(
  "/delete-news/:id",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const news = await News.findById(req.params.id);

      if (!news) {
        return next(new ErrorHandler("Không có bài đăng!", 400));
      }

      await News.findByIdAndDelete(req.params.id);

      res.status(201).json({
        success: true,
        message: "Xóa bài đăng thành công!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
