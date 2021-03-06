import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import LogoutButton from './LoginSignUpForm/LogoutButton';
import './LoginSignUpForm/LoginSignUpForm.css'

const LogSign = () => {
  // const dispatch = useDispatch();
  return (
    <nav>
      <ul className="ul">
        {/* <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/signform" exact={true} activeClassName="active">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signform" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        <li>
        <NavLink to="/" exact={true} activeClassName="active">
          <LogoutButton />
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LogSign;