import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../../store/session";

const SignUpForm = ({setShowModal}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password)) || {};
      if (data.errors) {
        setErrors(data.errors);
      } else if (!data.errors) setShowModal(false)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/savedItems" />;
  }

  return (
    <div className="signup-form-div">
      <form onSubmit={onSignUp} className="signup-forms">
      <div className="signup-form">
        <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
        </div>
        <div className="user-name">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="email2">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="password2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="repeat-pass">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="sign-up-button">
          <button className="sign-up-button" type="submit">Sign Up</button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default SignUpForm;
