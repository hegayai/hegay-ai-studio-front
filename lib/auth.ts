// hegay-ai-studio/lib/auth.ts
// Frontend-only auth helpers for Flask backend
// No bcrypt, no Prisma, no hashing — backend handles all security

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:10000";

// ------------------------------------------------------
// LOGIN
// ------------------------------------------------------
export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    const { access_token, refresh_token, user } = response.data;

    // Store tokens in browser
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    return user;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
}

// ------------------------------------------------------
// SIGNUP
// ------------------------------------------------------
export async function signup(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Signup failed");
  }
}

// ------------------------------------------------------
// LOGOUT
// ------------------------------------------------------
export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

// ------------------------------------------------------
// GET CURRENT USER (from backend)
// ------------------------------------------------------
export async function getCurrentUser() {
  const token = localStorage.getItem("access_token");
  if (!token) return null;

  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch {
    return null;
  }
}
