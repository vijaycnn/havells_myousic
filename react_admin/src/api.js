const baseURL = import.meta.env.VITE_API_BASE_URL_BACKEND;
let authToken = localStorage.getItem("auth-token");


export const login = async (formData) => {
  const response = await fetch(`${baseURL}/api/user/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', // Indicate the data format being sent
    },
    body: JSON.stringify(formData),
  });
  return response.json();
};

export const enquiryList = async (params) => {
  const response = await fetch(`${baseURL}/api/enquiry?${params.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `Bareer ${authToken}`,
    },
  });
  return response.json();
};
export const stateList = async () => {
  const response = await fetch(`${baseURL}/api/location/stateList`, {
    method: "GET",
  });
  return response.json();
};
export const cityList = async (stateId) => {
  const response = await fetch(`${baseURL}/api/location/city/getByState/${stateId}`, {
    method: "GET",
  });
  return response.json();
};
