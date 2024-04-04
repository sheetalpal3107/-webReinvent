import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-200"
    />
  );
};

export default FormInput;
