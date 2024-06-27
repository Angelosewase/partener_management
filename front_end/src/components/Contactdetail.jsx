import React from 'react';

const ContactDetails = () => {
  return (
    <div className="px-4 lg:px-10 pt-8 bg-blue-400 rounded-r-2xl">
      <h3 className="text-lg font-semibold text-white">Contact Details</h3>
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Street + Nr"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Additional information"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
        />
        <div className="flex my-4 gap-4">
          <input
            type="number"
            name=""
            id=""
            placeholder="Zip code"
            className="border-b border-gray-200 outline-none w-[100px] px-1 bg-blue-400 text-white placeholder:text-white"
          />
          <select name="" id="" className="flex-1 outline-none px-1 bg-blue-400 text-white">
            <option value="" className="text-xs text-black-900">Place</option>
            <option value="" className="text-xs text-black-900">option 2</option>
          </select>
        </div>
        <select
          name=""
          id=""
          className="border-b border-gray-200 w-full outline-none my-3 px-1 bg-blue-400 text-white"
        >
          <option value="" className="text-base text-gray-400">Country</option>
          <option value="" className="text-base text-gray-400">option 2</option>
        </select>
        <div className="flex my-4 gap-4">
          <select name="" id="" className="outline-none px-1 bg-blue-400 text-white">
            <option value="" className="text-xs text-black-900">Code</option>
            <option value="" className="text-xs text-black-900">option 2</option>
          </select>
          <input
            type="number"
            name=""
            id=""
            placeholder="Phone number"
            className="border-b border-gray-200 outline-none flex-1 px-1 bg-blue-400 text-white placeholder:text-white"
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Email"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white placeholder:text-sm px-1 bg-blue-400 text-white"
        />
        <div className="flex gap-4 mt-10 text-white">
          <input type="checkbox" name="" id="" />
          <p className="text-xs">I do accept the <span className="font-semibold">Terms and Conditions</span> of your site</p>
        </div>
        <button type="submit" className="mt-8 mb-5 rounded-3xl bg-white py-1 px-4 border text-base font-semibold hover:scale-105">
          Register Badge
        </button>
      </form>
    </div>
  );
};

export default ContactDetails;
