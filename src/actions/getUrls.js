import { giphyAPI } from "../APIs/giphyAPIs";

// アクションクリエーター
export const startRequest = () => {
  return { type: "START_REQUEST" };
};

// アクションクリエーター
export const receiveData = (data) => {
  return { type: "RECEIVE_DATA", payload: data };
};

// redux-thunkを使用した非同期処理におけるredux連携
export const getUrls = (word) => {
  return (dispatch) => {
    dispatch(startRequest());
    giphyAPI(word).then((res) => {
      const data = res.data.data;
      const imageUrlList = data.map((item) => {
        return item.images.downsized.url;
      });
      dispatch(receiveData(imageUrlList));
    });
  };
};
