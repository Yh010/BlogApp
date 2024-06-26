import { InputBox } from "../components/signupComponents/inputBox";
import { SignUpButton } from "../components/signupComponents/SignupButton";

export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded-lg">
        <InputBox placeholder="Email address" />
        <InputBox placeholder="Password" />
        <SignUpButton text="Sign Up" />
      </div>
    </div>
  );
};
