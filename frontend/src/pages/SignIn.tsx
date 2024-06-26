import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";

export const Signin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg">
        <InputBox placeholder="Email address" />
        <InputBox placeholder="Password" />
        <SignUpButton text="Sign In" />
      </div>
    </div>
  );
};
