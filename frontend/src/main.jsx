import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
   BrowserRouter
} from "react-router-dom";

import {
   AuthProvider
} from "./context/AuthContext";

import "./index.css";

import App from "./App";

ReactDOM.createRoot(
   document.getElementById("root")
).render(

   <React.StrictMode>

      <AuthProvider>

         <BrowserRouter>

            <App />
             <ToastContainer
         position="top-right"
         autoClose={3000}
      />

         </BrowserRouter>

      </AuthProvider>

   </React.StrictMode>
);