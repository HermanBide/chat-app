import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ChatPage from "./chatPage";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillPicture, AiOutlinePlusCircle } from "react-icons/ai";


const register = ({
  email,
  setEmail,
  username,
  setUsername,
  room,
  setRoom,
  password,
  setPassword,
  setShowChat,
  showChat,
  joinRoom,
  socket,
}) => {

  const [image, setImage] = useState(null);
  const [uploadImg, setUploadImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const validateImg = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile > 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(imgFile);
      setPicture(URL.createObjectURL(imgFile));
    }
  };

  const uploadImage = async () => {
    const imgData = new FormData();
    imgData.append("file", image);
    imgData.append("cloud_name", "dtasfpf37");
    imgData.append("upload_preset", "chat-app");
    try {
      setUploadImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dtasfpf37/image/upload",
        {
          method: "post",
          body: imgData,
        }
      );
      const urlData = await res.json();
      setUploadImg(false);
      return urlData.url;
    } catch (err) {
      setUploadImg(false);
      console.log(err);
      alert("Upload failed");
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    console.log(url);
    if (!username || !email || !password) {
      setLoading(false);
      return alert('Please Fill in all Fields');
    }

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await fetch(
        "/api/user",
        { username, email, password, picture },
        config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/chatPage");
        return alert('successful registration');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="register-title">
        <h2>Create account</h2>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="Signup-profile-pic-container">
          <img src={picture} className="signup-profile-pic" alt="profile-pic"/>
          <label htmlFor="image-upload" className="iamge-upload-label">
            <AiOutlinePlusCircle className="add-pic-icon" />
            <AiFillPicture />
          </label>
          <input
            type="file"
            id="image-upload"
            hidden
            accept="image/*"
            onChange={validateImg}
            // onChange={(e) => postPic(e.target.files[0])}
          ></input>
        </div>
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="signin-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="signin-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          className="signin-input"
          value={show ? "text" : password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <button onClick={handleSubmit}>
            { show ? "show": "hide"}
          </button> */}

        <button
          className="signin-btn"
          // isLoading={isLoading}
          type="submit"
        >
          {uploadImg ? "Signing you in..." : "Sign up"}
        </button>

        <div>
          <p style={{ color: "#495057" }}>
            Already have an account?{" "}
            <Link to="/login">
              <span
                id="span"
                style={{ color: "#1d3557", fontSize: 16, fontWeight: 600 }}
              >
                Log in
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default register;
