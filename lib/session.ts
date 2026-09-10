// Session disimpan di localStorage, bukan di server. Ini cukup untuk kebutuhan
// prototype/technical test — tidak ada backend sendiri yang bisa menyimpan session,
// dan requirement test case juga menyebutkan localStorage sebagai opsi yang valid.

const SESSION_KEY = "distrilink_session";

export interface Session {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}

export function saveSession(session: Session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): Session | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as Session;
  } catch {
    // Data korup/tidak valid, anggap saja tidak ada session.
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
