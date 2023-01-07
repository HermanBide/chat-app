import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/appApi";

const login = ({ username, setUsername, password, setPassword }) => {

  const [loginUser, {isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate()


  // function successLogin() {
  //   alert("You have Logged in!!!");
  //   history.push("/home");
  // }

  // function failedLogin() {
  //   alert("wrong username & password combination");
  //   history.push("/Login");
  // }

  const handleSubmit = async (e) => {
    // try {
    e.preventDefault();
    loginUser({ username, password}).then(({ data}) => {
      if(data) {
        console.log(data)
        navigate('/chatPage')
      }
    })
    //   const userInfo = {
    //     username,
    //     password,
    //   };
    //   // const user = await loginUser(userInfo);
    //   // props.setUser(user);
    //   // if (user) {
    //   //   successLogin();
    //   // } else {
    //   //   failedLogin();
    //   // }
    //   // history.push("/home");
    //   // if((userInfo === user) && (userInfo === user)) {
    //   // }
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  return (
    <div>
      <div className="register-title">
        <h4>Log into your account</h4>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
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
        <button className="signin-btn" 
          // onClick={joinRoom} 
          type="submit">
          {/* {uploadImg ? "Signing you in..." : "Sign up"} */}
          Log in
        </button>
        <div>
          <p style={{ color: "#495057" }}> 
            you dont have an account?{" "}
            <Link to="/register">
            <span id="span" style={{ color: "#1d3557", fontSize: 16, fontWeight: 600 }}>
              . . .Register
            </span>
            </Link>
              
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
