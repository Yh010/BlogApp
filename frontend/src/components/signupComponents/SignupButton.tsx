interface SignUpButtonProps {
  text: string;
  cb: () => void;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({ text, cb }) => {
  return (
    <div className="flex mt-4 mb-4 justify-center">
      <button onClick={cb} className="border rounded-full px-4 py-2">
        {text}
      </button>
    </div>
  );
};
