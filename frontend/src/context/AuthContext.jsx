import { toast } from "react-toastify";

import {
   createContext,
   useContext,
   useEffect,
   useState
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);

   const [token, setToken] = useState(
      localStorage.getItem("token") || null
   );

   useEffect(() => {

      const storedUser =
         localStorage.getItem("user");

      if (storedUser) {
         setUser(JSON.parse(storedUser));
      }

   }, []);

   const login = (userData, jwtToken) => {

      setUser(userData);

      setToken(jwtToken);

      localStorage.setItem(
         "user",
         JSON.stringify(userData)
      );

      localStorage.setItem(
         "token",
         jwtToken
      );
   };

   const logout = () => {

      setUser(null);

      setToken(null);

      localStorage.removeItem("user");

      localStorage.removeItem("token");

      toast.success("Logged out successfully");
   };

   return (
      <AuthContext.Provider
         value={{
            user,
            token,
            login,
            logout
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () =>
   useContext(AuthContext);