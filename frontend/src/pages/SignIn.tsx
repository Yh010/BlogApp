import { useState } from "react";
import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";
import { SigninInput } from "@yh010/blogapp-common";

export const Signin = () => {
  const [postInputs, setpostInputs] = useState<SigninInput>({
    username: "",
    password: "",
    name: "",
  });

  const handleChange = (field: keyof SigninInput, value: string) => {
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
        <SignUpButton text="Sign In" />
      </div>
      {JSON.stringify(postInputs)}
    </div>
  );
};
