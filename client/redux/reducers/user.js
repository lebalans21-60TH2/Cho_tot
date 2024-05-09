import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};


export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

// export const { LoadUserRequest, LoadUserSuccess, LoadUserFail } = userReducer.actions

export default userReducer.reducer
// export const { LoadUserRequest, LoadUserSuccess, LoadUserFail } = userReducer.actions
// export default userReducer.reducer

// import {LOAD_USER_REQUEST, LOAD_USER_SUCCESS,LOAD_USER_FAIL} from '../constans/UserConstant';

// export const userReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     // case LOGIN_REQUEST:
//     // case REGISTER_USER_REQUEST:
//     case LOAD_USER_REQUEST:
//       return {
//         loading: true,
//         isAuthenticated: false,
//       };
//     // case LOGIN_SUCCESS:
//     // case REGISTER_USER_SUCCESS:
//     case LOAD_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: true,
//         user: action.payload,
//       };

//     // case LOGOUT_SUCCESS:
//     //   return {
//     //     loading: false,
//     //     user: null,
//     //     isAuthenticated: false,
//     //   };
//     // case LOGIN_FAIL:
//     // case REGISTER_USER_FAIL:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     isAuthenticated: false,
//     //     user: null,
//     //     error: action.payload,
//     //   };

//     case LOAD_USER_FAIL:
//       return {
//         loading: false,
//         isAuthenticated: false,
//         user: null,
//         error: action.payload,
//       };

//     // case LOGOUT_FAIL:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     error: action.payload,
//     //   };

//     // case CLEAR_ERRORS:
//     //   return {
//     //     ...state,
//     //     error: null,
//     //   };

//     default:
//       return state;
//   }
// };