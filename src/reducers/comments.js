import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

const comments = (state = [], { type, payload } = {}) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      const commentsArray = payload.data.map((comment) => comment.name);
      return [...state, ...commentsArray];
    default:
      return state;
  }
};

export default comments;
