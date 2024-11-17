import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("tester@email.com");
  const [email, setEmail] = useState("tester123");
  const [password, setPassword] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const res = await axios.post(backendUrl + "/api/user/register", {
          name,
          password,
          email,
        });
        console.log(res);
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.success("Sign up successful");
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log(res);
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.success("Login successful");
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <form
        onSubmit={formSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
        </div>
        {currentState === "Sign Up" && (
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login here
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign in" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
