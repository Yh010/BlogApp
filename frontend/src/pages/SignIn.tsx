import { useEffect, useState } from "react";
import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";
import { SigninInput } from "@yh010/blogapp-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CredentialAlert } from "../components/signupComponents/Alert";
export const Signin = () => {
  const navigate = useNavigate();
  const [alertOn, setalertOn] = useState(false);
  const [postInputs, setpostInputs] = useState<SigninInput>({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (field: keyof SigninInput, value: string) => {
    setpostInputs({ ...postInputs, [field]: value });
  };

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      // signup failed alert here
      setalertOn(true);
    }
  }
  useEffect(() => {
    if (alertOn) {
      const timer = setTimeout(() => {
        setalertOn(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertOn]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg shadow-lg w-1/4">
        <div className="flex justify-center items-center mt-20 mb-14 text-2xl">
          Welcome Back
        </div>
        {alertOn && <CredentialAlert />}
        <InputBox
          placeholder="Username@gmail.com"
          cb={(value) => handleChange("username", value)}
          prev={postInputs.username}
        />
        <InputBox
          placeholder="Password"
          cb={(value) => handleChange("password", value)}
          prev={postInputs.password}
          type="password"
        />
        <SignUpButton cb={sendRequest} text="Sign In" />
        <div className="flex justify-between items-center">
          <div className="m-2 font-thin">Don't have an account ?</div>
          <Link
            className="border border-black rounded-full px-4 py-2 hover:bg-lime-500"
            to={"/signup"}
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};
