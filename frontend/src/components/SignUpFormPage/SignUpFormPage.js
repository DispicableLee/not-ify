import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import SignUpNavHeader from "./SIgnUpNavHeader";
import "./SignUpFormPage.css"
function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
        // else setErrors([res.statusText.message]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };



// ======================= return statement ===========================
// debugger
  return (
    <div id="signup-body">
      <SignUpNavHeader/>
      <form onSubmit={handleSubmit} id="signup-form">
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
          {/* Email */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {/* Username */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {/* Confirm Password */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        <button type="submit" className="signup-button">Sign Up</button>
          <h5>or <Link to="/login">Log In</Link></h5> 
      </form>
    </div>
  );
}

export default SignupFormPage;