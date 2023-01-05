import React from "react";

const login = ({ username, setUsername, password, setPassword }) => {
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
        <h2>STACK-Talk</h2>
        <p>This is application platform for users to chat and share ideas.</p>
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
          <p>
            you dont have an account?{" "}
            <span id="span">
              <href to="/signup">. . .Log In</href>
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
