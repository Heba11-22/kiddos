import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../store/session";
import DemoUser from './DemoUser';

const LoginForm = ( {setShowModal} ) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  // const userId = user.id
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password)) || {}
    if (data.errors) {
      setErrors(data.errors);
    } else if (!data.errors) setShowModal(false)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/savedItems" />;
  }

  return (
    <div className="login-form-div">
      <form onSubmit={onLogin} className="login-forms">
      <div className="login-form">
        <div>
          {errors.map((error,i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="password">
        <div>
          <label htmlFor="password">Password</label>
          </div>
          <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          </div>
        </div>
        <div className="log-in">
          <button className="login-button" type="submit">Login</button>
        </div>
        </div>
      </form>
      <div className="demo-log-in">
        <DemoUser setShowModal={setShowModal}/>
      </div>
    </div>
  );
};

export default LoginForm
