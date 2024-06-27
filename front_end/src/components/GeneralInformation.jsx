import React, { useState } from 'react';
import axios from 'axios';

const GeneralInformation = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    business_idea: '',
    employees: '',
    cna_employees:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)

    try {
      const response = await axios.post('http://localhost:3000/generalInformation', formData);
      console.log('Data successfully added:', response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        business_idea: '',
        cna_employees: '',
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className="px-4 lg:px-10 pt-8">
      <h3 className="text-lg font-semibold">General Information</h3>
      <form onSubmit={handleSubmit}>
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border-b border-gray-200 w-full outline-none my-3"
        >
          <option value="Title 1">Title 1</option>
          <option value="Option 2">Option 2</option>
        </select>

        <div className="flex w-full my-3 gap-8">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex-1 border-b outline-none placeholder:text-sm placeholder:text-gray-600"
          />

        </div>

        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border-b border-gray-200 w-full outline-none my-2"
        >
          <option value="Position">Position</option>
          <option value="Option 2">Option 2</option>
        </select>

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="my-3 border-b border-gray-200 outline-none w-full placeholder:text-black placeholder:text-sm"
        />

        <div className="flex gap-14 my-4">

          <input
            type="text"
            name="business_idea"
            value={formData.business_idea}
            onChange={handleChange}
            placeholder="Business Arena"
            className="flex-1 border-b border-gray-200 outline-none"
          />

          <select
            name="employees"
            value={formData.cna_employees}
            onChange={handleChange}
            className="outline-none"
          >
            <option value="Employees">Employees</option>
            <option value="Option 2">Option 2</option>
          </select>

        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
          Add Data
        </button>
      </form>
    </div>
  );
};

export default GeneralInformation;
