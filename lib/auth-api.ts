import { Session } from "./session";

const LOGIN_ENDPOINT = "https://dummyjson.com/auth/login";

export class LoginError extends Error {}

interface DummyJsonLoginResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  message?: string;
}

export async function loginWithDummyJson(
  username: string,
  password: string
): Promise<Session> {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data: DummyJsonLoginResponse = await response.json();

  if (!response.ok) {
    throw new LoginError(data.message ?? "Username atau password salah.");
  }

  return {
    id: data.id,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    accessToken: data.accessToken,
  };
}
