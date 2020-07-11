import {
  GET_NASA,
  GET_UNSPLASH,
  SEARCH_UNSPLASH,
  LOGIN,
  GET_POSTS,
  GET_COMMENTS,
  GET_PHOTOS,
  GET_ALBUMS,
} from "./types";

const initState = {
  nasa: {},
  unsplash: [],
  isLoggedIn: false,
  name: "",
  picture: "",
  posts: [],
  comments: [],
  photos: [],
  albums: [],
};

export default (state = initState, action) => {
  if (action.type === GET_NASA) {
    return { ...state, nasa: action.payload };
  }
  if (action.type === GET_UNSPLASH) {
    return { ...state, unsplash: action.payload };
  }
  if (action.type === SEARCH_UNSPLASH) {
    return { ...state, unsplash: action.payload };
  }
  if (action.type === LOGIN) {
    return {
      ...state,
      name: action.payload.name,
      picture: action.payload.picture,
      isLoggedIn: action.payload.isLoggedIn,
    };
  }
  if (action.type === GET_POSTS) {
    return { ...state, posts: action.payload };
  }
  if (action.type === GET_COMMENTS) {
    return { ...state, comments: action.payload };
  }
  if (action.type === GET_ALBUMS) {
    return { ...state, albums: action.payload };
  }
  if (action.type === GET_PHOTOS) {
    return { ...state, photos: action.payload };
  }
  return state;
};
