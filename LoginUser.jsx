import React, { useState } from "react";
import logofix from "../assets/logofix.png";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/loginMars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json(); // Parse response to get token
      const token = data.token; // Adjust this according to your API response
      alert("Login berhasil");
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setIsAuthenticated(true);
      window.location.href = "/";
    } else {
      alert("Login gagal");
    }
  };

  return (
    <div>
      <div className="px-[50px] py-[50px]">
        <div className="flex justify-between items-center absolute gap-[100px]">
          <div>
            <a className="" href="">
              <img className="w-[113px] h-[101px]" src={logofix} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex justify-between gap-[185px] text-[24px] font-bold">
              <li>
                <a className="text-[#1A719C]" href="/loginuser">
                  Login as User
                </a>
              </li>
              <li>
                <a className="" href="/loginadmin">
                  Login as Admin
                </a>
              </li>
              <li>
                <a className="" href="/register">
                  Register as User
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center">
          <div className="text-[36px] font-bold flex pt-[166px]">
            <div>Log in to your account</div>
          </div>
          <div className="">
            <div>Welcome! Please fill the form to log in</div>
          </div>
        </div>
        <div className="pt-[34px] flex justify-center">
          <div className="flex font-bold text-left text-[20px]">
            <form
              className="flex justify-between gap-[54px]"
              onSubmit={handleLogin}
            >
              <div className="grid gap-[20px]">
                <div>
                  <div className="pl-[17px]">Username</div>
                  <div className="pt-[11px]">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pl-[17px]">Password</div>
                  <div className="pt-[11px]">
                    <input
                      type="password" // Change to password type
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="pl-[17px] bg-[#83B3CA] placeholder-[#5C5C68] w-[594px] h-[65px] rounded-[20px]"
                    />
                  </div>
                </div>
                <div className="flex place-content-end">
                  <button
                    type="submit"
                    className="w-[125px] h-[56px] bg-[#1A719C] rounded-[20px] text-white"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="footer h-[100px] bg-[#1A719C] flex justify-center place-items-center font-bold text-[20px] text-white">
          Integrated of Banda Aceh, Sabang, and Lhokseumawe Information System
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
