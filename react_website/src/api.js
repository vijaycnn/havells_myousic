const baseURL = import.meta.env.VITE_API_BASE_URL_BACKEND;

export const getUploadUrl = async (file) => {
  const response = await fetch(`${baseURL}/api/enquiry/upload-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
    }),
  });
  return response.json();
};
export const submitForm = async (formData) => {
  const response = await fetch(`${baseURL}/api/enquiry/create`, {
    method: "POST",
    body: formData, // includes file
  });
  return response.json();
};
export const stateList = async () => {
  console.log('baseUrl', baseURL);
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
