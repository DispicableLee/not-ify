
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as sessionActions from '../../store/session';
import profileLogo from "../styling/images/navigation/profile.png"
import './ProfileButton.css'

function ProfileButton() {
  const user = useSelector(store=>store.session.user)
  console.log(user)
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <img onClick={openMenu} src={profileLogo} id="profile-button">
        {/* <i className="fa-solid fa-user-circle"/> */}
      </img>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><h4>{user.username}</h4></li>
          <li>{user.email}</li>
          <li>
            <Link to={`/profile/${user.id}`}>
              <h4>Profile</h4>
            </Link>
            </li>
          <hr></hr>
          <li onClick={logout}>
            Log Out
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;