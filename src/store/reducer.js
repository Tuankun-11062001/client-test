import {
  OPEN_LOGIN_SOCIAL_BOX,
  CLOSE_LOGIN_SOCIAL_BOX,
  OPEN_NOTIFICATION_BOX,
  CLOSE_NOTIFICATION_BOX,
  SAVE_INFO_USER,
  CLEAR_INFO_USER,
  OPEN_EDIT_USER_BOX,
  CLOSE_EDIT_USER_BOX,
  UPDATE_USER_INFO,
  OPEN_BOX_WRITE_POST,
  CLOSE_BOX_WRITE_POST,
  OPEN_IDEA_BOX,
  CLOSE_IDEA_BOX,
} from "./constains";

const initState = {
  fetchData: {
    loading: true,
    data: [],
    error: "",
  },
  ModelBox: {
    openLoginSocialBox: false,
    openBoxNotification: false,
    openBoxEditUser: false,
    openBoxWritePost: false,
    openBoxIdea: false,
  },
  userInfo: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_LOGIN_SOCIAL_BOX:
      console.log(action.payload);
      return {
        ...state,
        ModelBox: {
          openLoginSocialBox: true,
        },
      };
    case CLOSE_LOGIN_SOCIAL_BOX:
      return {
        ...state,
        ModelBox: {
          openLoginSocialBox: false,
        },
      };
    case OPEN_NOTIFICATION_BOX:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxNotification: true,
        },
      };
    case CLOSE_NOTIFICATION_BOX:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxNotification: false,
        },
      };
    case SAVE_INFO_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAR_INFO_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case OPEN_EDIT_USER_BOX:
      return {
        ...state,
        ModelBox: {
          openBoxEditUser: true,
        },
      };
    case CLOSE_EDIT_USER_BOX:
      return {
        ...state,
        ModelBox: {
          openBoxEditUser: false,
        },
      };
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case OPEN_BOX_WRITE_POST:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxWritePost: true,
        },
      };
    case CLOSE_BOX_WRITE_POST:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxWritePost: false,
        },
      };
    case OPEN_IDEA_BOX:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxIdea: true,
        },
      };
    case CLOSE_IDEA_BOX:
      return {
        ...state,
        ModelBox: {
          ...state.ModelBox,
          openBoxIdea: false,
        },
      };
    default:
      return state;
  }
};
export { initState };
export default reducer;
