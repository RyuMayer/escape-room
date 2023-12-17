const AUTH_TOKEN_NAME = 'six-cities';

type TToken = string;

function getToken(): TToken {
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  return token ?? '';
}

function saveToken(token: TToken): void {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
}

function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_NAME);
}

export { getToken, saveToken, dropToken };
