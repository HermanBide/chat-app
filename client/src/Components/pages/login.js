import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const login = ({ email, setEmail, password, setPassword }) => {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setShow(!show)
  }

  // function successLogin() {
  //   alert("You have Logged in!!!");
  //   history.push("/home");
  // }

  // function failedLogin() {
  //   alert("wrong username & password combination");
  //   history.push("/Login");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!email || !password) {
      setLoading(false)
      return alert("Please fill in all fields")
    }
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await fetch(
        "/api/user/login",
        { email, password },
        config
      );
      localStorage.getItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chatPage");
      return alert('successful login');
    } catch (err) {
      console.log(err);
    }
    // loginUser({ username, password}).then(({ data}) => {
    //   if(data) {
    //     console.log(data)
    //     navigate('/chatPage')
    //   }
    // })
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
      <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="signin-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label>password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          className="signin-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
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
