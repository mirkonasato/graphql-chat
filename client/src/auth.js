import jwtDecode from 'jwt-decode';

const ACCESS_TOKEN_KEY = 'accessToken';
const API_URL = 'http://localhost:9000';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getUser() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export async function login(userId, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ userId, password }),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return { id: userId };
  }
  return null;
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token) {
  const jwtPayload = jwtDecode(token)
  return { id: jwtPayload.sub };
}
