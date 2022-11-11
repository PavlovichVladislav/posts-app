import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthContext } from "../context";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";
import Lodaer from "./UI/loader/Lodaer";

const AppRouter = () => {
   const {isAuth, isLoading} = useContext(AuthContext);

   if (isLoading) {
      return <Lodaer/>;
   }

   return isAuth ? (
      <Routes>
         {privateRoutes.map((route) => (
            <Route
               path={route.path}
               element={route.component}
               key={route.path}
            />
         ))}
         <Route path="/error" element={<Error />} />
         <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
   ) : (
      <Routes>
         {publicRoutes.map((route) => (
            <Route
               path={route.path}
               element={route.component}
               key={route.path}
            />
         ))}
         <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
   );
};

export default AppRouter;
