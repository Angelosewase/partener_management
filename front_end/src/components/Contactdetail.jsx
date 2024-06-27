import React, { useState } from 'react';
import axios from 'axios';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    partner_id: '', // Assuming you'll set this dynamically or fetch from another source
    location: '',
    additional_information: '',
    zip_code: '',
    place: '',
    country_code: '',
    phone_number: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/contactDetails', formData);
      console.log('Data successfully added:', response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        partner_id: '',
        location: '',
        additional_information: '',
        zip_code: '',
        place: '',
        country_code: '',
        phone_number: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className="px-4 lg:px-10 pt-8 bg-blue-400 rounded-r-2xl">
      <h3 className="text-lg font-semibold text-white">Contact Details</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Street + Nr"
          value={formData.location}
          onChange={handleChange}
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white px-1 bg-blue-400 text-white"
        />
        <input
          type="text"
          name="additional_information"
          placeholder="Additional information"
          value={formData.additional_information}
          onChange={handleChange}
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white px-1 bg-blue-400 text-white"
        />
        <div className="flex my-4 gap-4">
          <input
            type="text"
            name="zip_code"
            placeholder="Zip code"
            value={formData.zip_code}
            onChange={handleChange}
            className="border-b border-gray-200 outline-none w-[100px] px-1 bg-blue-400 text-white placeholder:text-white"
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={formData.place}
            onChange={handleChange}
            className="flex-1 outline-none px-1 bg-blue-400 text-white placeholder:text-white"
          />
        </div>
        <input
          type="text"
          name="country_code"
          placeholder="Country Code"
          value={formData.country_code}
          onChange={handleChange}
          className="border-b border-gray-200 w-full outline-none my-3 px-1 bg-blue-400 text-white placeholder:text-white"
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone number"
          value={formData.phone_number}
          onChange={handleChange}
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white px-1 bg-blue-400 text-white"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-white px-1 bg-blue-400 text-white"
        />
        <div className="flex gap-4 mt-10 text-white">
          <input type="checkbox" name="" id="" />
          <p className="text-xs">I do accept the <span className="font-semibold">Terms and Conditions</span> of your site</p>
        </div>
        <button
          type="submit"
          className="mt-8 mb-5 rounded-3xl bg-white py-1 px-4 border text-base font-semibold hover:scale-105"
        >
          Register Badge
        </button>
      </form>
    </div>
  );
};

export default ContactDetails;
