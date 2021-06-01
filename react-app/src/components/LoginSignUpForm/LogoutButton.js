import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    await dispatch(logout());
     history.push("/")
  };

  return <button onClick={onLogout} className="button"><span className="material-icons">&#xe9ba;</span></button>;
};

export default LogoutButton;
