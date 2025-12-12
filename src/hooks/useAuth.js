// useAuth.js
import { useContext } from "react";
import { AuthContext } from "../Layout/AuthProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("useAuth must be inside AuthProvider!");
  return auth;
};
