import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments, saveComment } from 'actions';
import requireAuth from 'components/requireAuth';
const CommentBox = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ comment: '' });

  const handleChange = (event) => {
    setState({ comment: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveComment(state.comment));
    setState({ comment: '' });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={state.comment}
          onChange={handleChange}
        ></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={() => dispatch(fetchComments())}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default requireAuth(CommentBox);
