interface InputProps {
  placeholder: string;
}
export const InputBox: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="flex justify-center p-2 span">
      <input
        type="text"
        name="price"
        id="price"
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};
