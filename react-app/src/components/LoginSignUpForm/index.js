import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import NavBar from "../NavBar";
import './LoginSignUpForm.css'


const LoginSignUpModal = () => {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="sign-page-div">
            {/* <div className="nav-div">
                <NavBar/> 
            </div> */}
                <h3 className="sen-plz-login">Please Login or Sign up</h3>
            <div className="log-sign-forms-div">

                <div className="log-div">
                    <LoginForm/>
                </div>
                <div className="signup-div">
                    <SignUpForm/>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUpModal;


























// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import UsersList from "../../components/UsersList";
// import User from "../../components/User";
// // import { authenticate } from "./services/auth";
// import { authenticate } from "../../store/session";
// import LoginForm from './LoginForm';
// import LogoutButton from './LogoutButton';
// import ProtectedRoute from './ProtectedRoute';
// import SignUpForm from './SignUpForm';
// import LogSign from "../LogSign";
// import { Modal } from '../../context/Modal';
// import "./LoginSignUpForm.css"

// function LoginSignUpForm() {

//   const dispatch = useDispatch();
//   const [loaded, setLoaded] = useState(false);


//   // useEffect cant't have async func. Only if we invoke it immeditaly.
//   useEffect(() => {
//     (async() => {
//       await dispatch(authenticate());
//       setLoaded(true);
//       })();
//   }, [dispatch]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <BrowserRouter>
//     <LogSign />
//     <Switch>
//       <Route path="/login" exact={true}>
//         <LoginForm />
//       </Route>
//       <Route path="/sign-up" exact={true}>
//         <SignUpForm />
//       </Route>
//       <ProtectedRoute path="/users" exact={true} >
//         <UsersList/>
//       </ProtectedRoute>
//       <ProtectedRoute path="/users/:userId" exact={true}>
//         <User />
//       </ProtectedRoute>
//       <ProtectedRoute path="/" exact={true}>
//         <h1>My Home Page</h1>
//       </ProtectedRoute>
//     </Switch>
//   </BrowserRouter>
//   )
// }

// export default LoginSignUpForm;
