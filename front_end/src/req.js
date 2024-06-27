// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your backend API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllContactDetails = async () => {
  try {
    const response = await api.get('/contactDetails');
    return response.data;
  } catch (error) {
    console.error('Error fetching contact details:', error);
    throw error;
  }
};

export const getContactDetailById = async (id) => {
  try {
    const response = await api.get(`/contactDetails/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact detail with id ${id}:`, error);
    throw error;
  }
};

export const createContactDetail = async (contactDetailData) => {
  try {
    const response = await api.post('/contactDetails', contactDetailData);
    return response.data;
  } catch (error) {
    console.error('Error creating contact detail:', error);
    throw error;
  }
};

export const updateContactDetail = async (id, contactDetailData) => {
  try {
    const response = await api.put(`/contactDetails/${id}`, contactDetailData);
    return response.data;
  } catch (error) {
    console.error(`Error updating contact detail with id ${id}:`, error);
    throw error;
  }
};

export const deleteContactDetail = async (id) => {
  try {
    const response = await api.delete(`/contactDetails/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting contact detail with id ${id}:`, error);
    throw error;
  }
};
