import React from "react";
const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-lg text-white">{label}</label>}

        <input
          ref={ref}
          type={type}
          className={`px-3 py-2 rounded-md bg-black text-white border outline-none 
          ${error ? "border-red-500" : "border-gray-600"} 
          focus:border-purple-500 ${className}`}
          {...props}
        />

        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

export default Input;
