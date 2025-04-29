const BASE_URL = 'https://app.swaggerhub.com/apis-docs/JAMESEDMONSON/frog-crew/1.0.0#/';

export async function apiGet(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return response.json();
}

export async function apiPost(endpoint, data) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function apiDelete(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE'
  });
  return response.json();
}
