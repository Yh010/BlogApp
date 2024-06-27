import { useState } from "react";
import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";
import { SigninInput } from "@yh010/blogapp-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Signin = () => {
  const navigate = useNavigate();
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
      alert("error while signing in");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div>Don't have an account ?</div>
          <Link className="border rounded p-2" to={"/signup"}>
            SignUp
          </Link>
        </div>
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
      </div>
    </div>
  );
};
