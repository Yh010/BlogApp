interface SignUpButtonProps {
  text: string;
  cb: () => void;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({ text, cb }) => {
  return (
    <div className="flex justify-center">
      <button onClick={cb} className="border rounded p-2">
        {text}
      </button>
    </div>
  );
};
