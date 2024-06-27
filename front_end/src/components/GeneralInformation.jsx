import React from 'react';

const GeneralInformation = () => {
  return (
    <div className="px-4 lg:px-10 pt-8">
      <h3 className="text-lg font-semibold">General Information</h3>
      <form>
        <select
          name=""
          id=""
          className="border-b border-gray-200 w-full outline-none my-3"
        >
          <option value="" className="text-base text-gray-400">title 1</option>
          <option value="" className="text-base text-gray-400">option 2</option>
        </select>
        <div className="flex w-full my-3 gap-8">
          <input
            type="text"
            name=""
            id=""
            placeholder="FirstName"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="LastName"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />
        </div>
        <select
          name=""
          id=""
          className="border-b border-gray-200 w-full outline-none my-2"
        >
          <option value="" className="text-xs text-gray-900">Position</option>
          <option value="" className="text-xs text-gray-900">option 2</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="Company"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-black placeholder:text-sm"
        />
        <div className="flex gap-14 my-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Business arena"
            className="flex-1 border-b border-gray-200 outline-none"
          />
          <select name="" id="" className="outline-none">
            <option value="" className="text-xs text-black-900">employees</option>
            <option value="" className="text-xs text-black-900">option 2</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
