interface AuthorizationInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const AuthorizationInput = ({
  placeholder,
  value,
  setValue,
}: AuthorizationInputProps) => {
  const inputClasses =
    "w-96 my-2 bg-yellow-50 text-gray-900 border border-yellow-400 rounded-md py-1 px-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 h-8 hover:bg-yellow-100";

  return (
    <input
      placeholder={placeholder}
      className={inputClasses}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default AuthorizationInput;
