const tokenkey = 'AuthData';

type LoginResponse = {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
    userName: string;
    userId: number;
  }

  export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenkey, JSON.stringify(obj));
  }

  export const getAuthData = () => {
    const str = localStorage.getItem(tokenkey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
  }

  export const removeAuthData = () => {
    localStorage.removeItem(tokenkey);
  }
