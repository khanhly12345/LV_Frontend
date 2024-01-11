import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value?: string;
	type: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
function Input({ name, value, handleChange, type} : InputProps) {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          {name}
        </label>
        <input
          className="rounded-md appearance-none  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          type={type}
          placeholder={name}
		  value={value}
		  name={name}
		  multiple
		  onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Input;
