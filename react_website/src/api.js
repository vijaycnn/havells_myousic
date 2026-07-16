const baseURL = import.meta.env.VITE_API_BASE_URL_BACKEND;

export const getUploadUrl = async (file) => {
  console.log('file details::', file);
  const response = await fetch(`${baseURL}/api/enquiry/upload-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    }),
  });
  return response.json();
};
export const checkValidEnquiry = async (formData) => {
  const response = await fetch(`${baseURL}/api/enquiry/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData), // includes file
  });
  return response.json();
};
export const verifyOTP = async (formData) => {
  const response = await fetch(`${baseURL}/api/enquiry/verifyOTP`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData), // includes file
  });
  return response.json();
};
export const submitForm = async (formData) => {
  const response = await fetch(`${baseURL}/api/enquiry/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData), // includes file
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

export const bannerList = async () => {
  console.log('baseUrl', baseURL);
  const response = await fetch(`${baseURL}/api/banner/getList`, {
    method: "GET",
  });
  return response.json();
};
export const galleryList = async () => {
  const response = await fetch(`${baseURL}/api/gallery/getList`, {
    method: "GET",
  });
  return response.json();
};
export const slideFileList = async () => {
  const response = await fetch(`${baseURL}/api/slideFile/getList`, {
    method: "GET",
  });
  return response.json();
};
export const contextList = async () => {
  console.log('baseUrl', baseURL);
  const response = await fetch(`${baseURL}/api/slide/getList`, {
    method: "GET",
  });
  return response.json();
};
export const mentorList = async () => {
  console.log('baseUrl', baseURL);
  const response = await fetch(`${baseURL}/api/mentor/getList`, {
    method: "GET",
  });
  return response.json();
};
export const faqList = async () => {
  console.log('baseUrl', baseURL);
  const response = await fetch(`${baseURL}/api/faq/getList`, {
    method: "GET",
  });
  return response.json();
};

