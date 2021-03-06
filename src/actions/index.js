import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments', {
    params: {
      offSet: 5,
      _limit: 10,
    }
  });

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export const changeAuth = (isLoggedIn) => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
