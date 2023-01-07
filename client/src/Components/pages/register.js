import React, {useState} from "react";
import {Link } from "react-router-dom";
// import ChatPage from "./chatPage";
import { useNavigate } from "react-router";
import { AiFillPicture, AiOutlinePlusCircle } from 'react-icons/ai'
import { useSignupUserMutation } from "../../services/appApi";

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
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [uploadImg, setUploadImg] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [signupUser, {isLoading, error}] = useSignupUserMutation()

  const validateImg = (e) => {
      const imgFile = e.target.files[0];
      if(imgFile > 1048576) {
        return alert("Max file size is 1mb")
      
      } else {
        setImage(imgFile);
        setImagePreview(URL.createObjectURL(imgFile))
      }
  }

  const uploadImage = async () => { 
    const imgData = new FormData();
    imgData.append('file', image);
    imgData.append('upload_preset', 'zb5oa3ct');
    try {
      setUploadImg(true)
      let res = await fetch('https://api.cloudunary.com/v1_1/dtasfpf37/image/upload',{
        method: 'POST',
        body: imgData
      })
      const urlData = await res.json();
      setUploadImg(false);
      return urlData.url
    } catch (err) {
      setUploadImg(false);
      console.log(err)
      alert("Upload failed")
    }
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(!image) return alert('Please upload your profile picture')
    const url = await uploadImage(image)
    console.log(url)
    signupUser({ username,email, password, picture: url}).then(({ data }) => {
      if(data) {
        console.log(data)
        navigate('/chatPage')
      }
    })
    // const userInfo = {
    //   email,
    //   username,
    //   password,
    // };
    // localStorage.setItem('userInfo', JSON.stringify(userInfo))
    // Navigate('/chatPage')
  };

  return (
    <div className="home">
      <div className="register-title">
        <h2>Create account</h2>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
      <div className="Signup-profile-pic-container">
    <img src={imagePreview} className="signup-profile-pic" alt="profile-pic"/>
        <label htmlFor="image-upload" className="iamge-upload-label">
        <AiOutlinePlusCircle/>
          <AiFillPicture />
        </label>
        <input
          type="file"
          id="image-upload"
          hidden
          accept="image/png, image/jpeg"
          onChange={validateImg}
        ></input>
      </div>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="signin-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          className="signin-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="signin-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <select
          className="options-list"
          id="options"
          onChange={(e) => setRoom(e.target.value)}
        >
          {/* <select className={styles.input}></select> */}
          <option>-- Select Room --</option>
          <option value="mern-stack">MERN-Stack</option>
          <option value="mean-stack">MEAN-Stack</option>
          <option value="mevn-stack">MEVN-Stack</option>
          <option value="lamp-stack">LAMP-Stack</option>
          <option value="serverless-stack">Serverless-Stack</option>
          <option value="flutter">Flutter</option>
        </select>
        <button className="signin-btn" onClick={joinRoom} type="submit">
        { uploadImg ? "Signing you in..." : "Sign up" }
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
