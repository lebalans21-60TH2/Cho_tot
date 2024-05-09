import axios from "axios";
import { server } from "../../app/server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// Load User
// export const loadUser = () => async (dispatch) =>{
//   try {
//       dispatch({type: LOAD_USER_REQUEST});
//            // eslint-disable-next-line
//       const config = { headers:{ "Content-Type": "application/json"} };

//       const {data} = await axios.get(
//         `${server}/user/getuser`);
           
//      dispatch({type: LOAD_USER_SUCCESS, payload: data.user });
//   } catch (error) {  
//       dispatch({type: LOAD_USER_FAIL, payload: error.response.data.message});
//   }
// }