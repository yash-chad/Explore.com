import axios from "axios";
import dotenv from "dotenv";
import {
  GET_NASA,
  SEARCH_UNSPLASH,
  GET_UNSPLASH,
  LOGIN,
  GET_POSTS,
  GET_COMMENTS,
  GET_ALBUMS,
  GET_PHOTOS,
} from "./types";
dotenv.config();

export const getNasa = () => (dispatch) => {
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=oVJPpLLm9nFikReKhZmSvJ2kUlg9hE73ITqh4PUP`
    )
    .then((res) => {
      dispatch({
        type: GET_NASA,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const getUnsplash = () => (dispatch) => {
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=cities&client_id=UMiSJNsTlR22RGONiq6z-kaafXQ68XHBN9LHWlgtvI4&orientation=portrait`
    )
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_UNSPLASH,
        payload: res.data.results,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const searchUnsplash = (search) => (dispatch) => {
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&per_page=28&query=${search}&client_id=UMiSJNsTlR22RGONiq6z-kaafXQ68XHBN9LHWlgtvI4`
    )
    .then((res) => {
      // console.log(res);
      dispatch({
        type: SEARCH_UNSPLASH,
        payload: res.data.results,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const loginUser = (obj) => (dispatch) => {
  // console.log(obj);
  dispatch({
    type: LOGIN,
    payload: obj,
  });
};

export const getPosts = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const getComments = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const getAlbums = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums`)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_ALBUMS,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

export const getPhotos = (alubmId) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${alubmId}/photos`)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_PHOTOS,
        payload: res.data,
      });
    })
    .then((err) => {
      console.log(err);
    });
};

//  `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
