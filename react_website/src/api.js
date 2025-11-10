export const submitForm = async (formData) => {
  const response = await fetch("http://localhost:4000/api/enquiry/create", {
    method: "POST",
    body: formData, // includes file
  });
  return response.json();
};
export const stateList = async () => {
  const response = await fetch("http://localhost:4000/api/location/stateList", {
    method: "GET",
  });
  return response.json();
};
export const cityList = async (stateId) => {
  const response = await fetch(`http://localhost:4000/api/location/city/getByState/${stateId}`, {
    method: "GET",
  });
  return response.json();
};
