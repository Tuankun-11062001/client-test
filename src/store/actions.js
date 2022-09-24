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

const openLoginSocialBox = (payload) => ({
  type: OPEN_LOGIN_SOCIAL_BOX,
  payload,
});

const closeLoginSocialBox = () => ({
  type: CLOSE_LOGIN_SOCIAL_BOX,
});

const openNotificationBox = (payload) => ({
  type: OPEN_NOTIFICATION_BOX,
  payload,
});

const closeNotificationBox = () => ({
  type: CLOSE_NOTIFICATION_BOX,
});

const saveInfoUser = (payload) => ({
  type: SAVE_INFO_USER,
  payload,
});

const clearInfoUser = (payload) => ({
  type: CLEAR_INFO_USER,
  payload,
});

const openEditUserBox = () => ({
  type: OPEN_EDIT_USER_BOX,
});

const closeEditUserBox = () => ({
  type: CLOSE_EDIT_USER_BOX,
});

const updateUserInfo = (payload) => ({
  type: UPDATE_USER_INFO,
  payload,
});

const openBoxWritePost = () => ({
  type: OPEN_BOX_WRITE_POST,
});

const closeBoxWritePost = () => ({
  type: CLOSE_BOX_WRITE_POST,
});

const openBoxIdea = () => ({
  type: OPEN_IDEA_BOX,
});

const closeBoxIdea = () => ({
  type: CLOSE_IDEA_BOX,
});

export {
  openLoginSocialBox,
  closeLoginSocialBox,
  openNotificationBox,
  closeNotificationBox,
  saveInfoUser,
  clearInfoUser,
  openEditUserBox,
  closeEditUserBox,
  updateUserInfo,
  openBoxWritePost,
  closeBoxWritePost,
  openBoxIdea,
  closeBoxIdea,
};
