import URL from "../config.js";

async function apiService(url, { method, body, headers } = {}) {
  if (body) {
    headers = { ...headers, "Content-Type": "application/json" };
  }

  const config = {
    method: method || body ? "POST" : "GET",
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(URL + url, config);
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = { message: error };
  }
  console.log(data);
  return data;
}

export default apiService;
