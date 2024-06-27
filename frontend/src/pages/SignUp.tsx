import { SignupInput } from "@yh010/blogapp-common";
import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";
import { useState } from "react";

export const Signup = () => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (field: keyof SignupInput, value: string) => {
    setpostInputs({ ...postInputs, [field]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg">
        <InputBox
          placeholder="Username"
          cb={(value) => handleChange("username", value)}
          prev={postInputs.username}
        />
        <InputBox
          placeholder="Password"
          cb={(value) => handleChange("password", value)}
          prev={postInputs.password}
        />
        <InputBox
          placeholder="Name"
          cb={(value) => handleChange("name", value)}
          prev={postInputs.name || ""}
        />
        <SignUpButton text="Sign Up" />
      </div>
      {JSON.stringify(postInputs)}
    </div>
  );
};
