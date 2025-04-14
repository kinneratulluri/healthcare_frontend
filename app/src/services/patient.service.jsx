import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const patientSignUp = async (formData) => {
  const response = await axios.post(`${apiUrl}/api/v1/patient/signup`, formData);
  return response.data;
};

export const patientLogin = async (formData) => {
  const response = await axios.post(`${apiUrl}/api/v1/patient/login`, formData);
  return response.data;
};
