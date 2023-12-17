// api.js
export const fetchDataFromPlaceholder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data;
};
