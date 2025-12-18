import React from 'react';

export default function FormInput({ type = "text", name, value, onChange, placeholder }) {
  const isTextarea = type === "textarea";
  
  const baseClasses = "w-full border-0 border-b-2 border-gray-300 focus:border-teal-400 outline-none py-3 text-lg transition-colors";
  
  if (isTextarea) {
    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="5"
        className={`${baseClasses} resize-none`}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={baseClasses}
    />
  );
}