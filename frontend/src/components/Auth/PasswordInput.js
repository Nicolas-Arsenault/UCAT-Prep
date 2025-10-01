import React, { useState } from 'react';

function PasswordInput({ value, onChange, placeholderText = 'Mot de passe', text = "Mot de passe" }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full mb-5">
      {text && <label className="text-left mb-2 font-medium block">{text}</label>}
      <div className='flex flex-row'>
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholderText}
          className="border border-gray-300 rounded-md p-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          className=" text-gray-500 hover:text-gray-700 focus:outline-none z-10 ml-2"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            // Eye icon (open)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            // Eye icon (closed)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.993 9.993 0 013.728-5.169M6.879 6.879A9.965 9.965 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.98 9.98 0 01-1.535 2.69M3 3l18 18"
              />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}

export default PasswordInput;
