import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/session";
import dotdotdot from "../styling/images/navigation/dotdotdot.png"
import { useHistory } from "react-router-dom";
import "./ProfileShow.css"


export default function UpdateInfoModal({sessionUser, onUserUpdate}){
    const history = useHistory();
    const dispatch = useDispatch()
    const signedInUser = useSelector(store=>store.session.user)
    const [openModal, setOpenModal] = useState(false)
    const [formUsername, setFormUsername] = useState(signedInUser.username)
    // console.log(openModal)



  useEffect(() => {
    const handleClickOutside = () => {
      setOpenModal(false);
    };

    if (openModal) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openModal]);

  const handleModalClick = (e) => {
    // Prevent click propagation within the modal content
    e.stopPropagation();
  };

  function handleClick() {
    setOpenModal(!openModal);
  }

  function handleSubmit(e){
    e.preventDefault();

    const body = { email: sessionUser.email, username: formUsername };
    dispatch(updateUser(sessionUser.id, body));

    // Notify the parent component about the user update
  };


  return (
    <div>
      {openModal && (
        <div id="modal-form" onClick={handleModalClick}>
          <h3>Profile Details</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={formUsername}
              onChange={(e) => setFormUsername(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      )}
      <img src={dotdotdot} id="modal-icon" alt="Modal Icon" onClick={() => setOpenModal(!openModal)} />
    </div>
  );
}
