interface InputProps {
  placeholder: string;
  cb: (value: string) => void;
  prev: string;
  type?: string;
}
export const InputBox: React.FC<InputProps> = ({
  placeholder,
  cb,
  prev,
  type,
}) => {
  return (
    <div className="flex justify-center p-2 span">
      <input
        type={type || "text"}
        className="block rounded-md border border-black py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={prev}
        onChange={(e) => cb(e.target.value)}
      />
    </div>
  );
};
