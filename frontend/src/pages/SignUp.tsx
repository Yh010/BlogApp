import { SignupInput } from "@yh010/blogapp-common";
import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (field: keyof SignupInput, value: string) => {
    setpostInputs({ ...postInputs, [field]: value });
  };

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      // signup failed alert here
      alert("error while signing up");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg shadow-lg w-1/4 h-3/4">
        <div className="flex justify-center items-center mt-20 mb-16">
          Join Blog App
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
        <InputBox
          placeholder="Name"
          cb={(value) => handleChange("name", value)}
          prev={postInputs.name || ""}
        />
        <SignUpButton cb={sendRequest} text="Sign Up" />
        <div className="flex justify-between items-center">
          <div className="m-2">Already have an account ?</div>
          <Link className="border rounded-full px-4 py-2" to={"/signin"}>
            Signin instead
          </Link>
        </div>
      </div>
    </div>
  );
};
