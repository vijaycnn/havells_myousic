const baseURL = import.meta.env.VITE_API_BASE_URL_BACKEND;

// export const submitForm = async (formData) => {
//   const response = await fetch(`${baseURL}/api/enquiry/create`, {
//     method: "POST",
//     body: formData, // includes file
//   });
//   return response.json();
// };

export const enquiryList = async (params) => {
  const response = await fetch(`${baseURL}/api/enquiry?${params.toString()}`, {
    method: "GET",
    // body: body
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
