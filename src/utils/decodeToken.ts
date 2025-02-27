import { jwtDecode, JwtPayload } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

export const decodeToken = (token: string): CustomJwtPayload => {
  return jwtDecode<CustomJwtPayload>(token);
};
