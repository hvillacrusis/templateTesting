import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const requireAuth = (ChildComponent) => {
  return (props) => {
    const auth = useSelector((reducerState) => reducerState.auth);
    const history = useHistory();

    useEffect(() => {
      const shouldNavigateAway = () => {
        if (!auth) {
          history.push('/');
        }
      };
      shouldNavigateAway();
    }, [auth, history]);
    
    return auth ? <ChildComponent {...props}/> : <></>;
  };
};

export default requireAuth;
