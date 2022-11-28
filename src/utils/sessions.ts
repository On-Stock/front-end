import Cookies from 'js-cookie'

export const setSessionCookie = (session: any): void => {
  Cookies.remove("session");
  Cookies.set("session", session, { expires: 1 });
}

export const getSessionCookie = (): any => {
  const session = Cookies.get("session");
  if (session === undefined) {
    return {
      id: '',
      name: '',
      email: '',
      login: '',
      password: '',
      address: '',
      phone: '',
      role: '',
    };
  } else {
    return JSON.parse(session);
  }
}