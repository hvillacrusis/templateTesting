import React from 'react';
import { useSelector } from 'react-redux';
import requireAuth from 'components/requireAuth';
const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  const renderComments = () => {
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  };

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default requireAuth(CommentList);
