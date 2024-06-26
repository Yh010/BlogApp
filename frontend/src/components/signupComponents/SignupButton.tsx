interface SignUpButtonProps {
  text: string;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({ text }) => {
  return (
    <div className="flex justify-center">
      <button className="border rounded p-2">{text}</button>
    </div>
  );
};
