import { useLocation } from "react-router-dom";

export const useIs2024 = () => {
  const location = useLocation();
  return location.pathname.startsWith("/2024");
};
