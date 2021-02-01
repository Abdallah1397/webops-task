import Types from "../types/imageType";

export const getAllImageRequest = () => ({
  type: Types.GET_ALL_IMAGE_REQUEST,
});

export const getAllImageSuccess = (data) => ({
  type: Types.GET_ALL_IMAGE_SUCCESS,
  payload: data,
});
export const getAllImageFail = () => ({
  type: Types.GET_ALL_IMAGE_FAIL,
});
export const setLoading = () => ({
  type: Types.SET_LOADING,
});
