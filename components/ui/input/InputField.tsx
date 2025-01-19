import { FiSearch } from 'react-icons/fi';
import { ChangeEventHandler } from 'react';

interface InputFieldProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}

export default function InputField({ onChange, defaultValue }: InputFieldProps) {
  return (
    <>
      <div className="mt-2">
        <div className="flex items-center border border-gray-300 rounded-md focus-within:border-indigo-600">
          <input
            type="text"
            name="searchQuery"
            defaultValue={defaultValue}
            id="search"
            className="block min-w-0 grow py-1.5 pl-3 pr-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-l-md sm:text-sm/6 border-none"
            placeholder="Search..."
            onChange={onChange}
          />
          <div className="flex items-center justify-center px-3 h-full">
            <FiSearch className="text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
}