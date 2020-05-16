import axios from "axios";
const initState = {
  listData: [],
}

const LIST_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = "ERROR_MSG";

export function user(state = initState, action) {
    switch (action.type) {
      case LIST_SUCCESS:
        return { ...state,
            listData: action.payload,
          ...action.payload
        };
      case ERROR_MSG:
        return { ...state,
          ...action.payload
        };
      default:
        return state;
    }
  }

  function listSuccess(obj) {
    const {
      pwd,
      ...data
    } = obj //过滤掉data中的pwd字段
    return {
      type: LIST_SUCCESS,
      payload: data
    }
  }

  function errorMsg(msg) {
    return {
      msg,
      type: ERROR_MSG
    };
  }

export function list() {
  return dispatch => {
    axios.post("/user/info").then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(listSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}


