import React, { memo } from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import { changeAuth } from 'actions';
const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const renderButton = () => {
    if (auth) {
      return (
        <button
          onClick={() => {
            dispatch(changeAuth(false));
          }}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            dispatch(changeAuth(true));
          }}
        >
          Sign In
        </button>
      );
    }
  };
  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };
  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox}></Route>
      <Route path="/" exact component={CommentList}></Route>
    </div>
  );
};
export default App;
