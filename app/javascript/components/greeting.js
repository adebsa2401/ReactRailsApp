import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMessage from '../feature/services/getMessage';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);
  const message = useSelector((state) => state.message);

  return <h1>{message.data.text}</h1>;
};

export default Greeting;
