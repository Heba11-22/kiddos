import React from "react";
import { useDispatch } from 'react-redux';
import { Redirect,useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    await dispatch(logout());
    //  return <Redirect to="/" />
     history.push("/")
    // window.location.reload()
  };

  return <button onClick={onLogout} className="button"><span className="material-icons">&#xe9ba;</span></button>;
};

export default LogoutButton;
