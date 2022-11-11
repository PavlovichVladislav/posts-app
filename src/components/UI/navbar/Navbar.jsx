import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
   const { setIsAuth } = useContext(AuthContext);

   const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('posts/auth');
   };

   return (
      <div className="navbar">
         <MyButton onClick={logout}> Выйти</MyButton>
         <div className="navbar__links">
            <MyButton>
               <Link to="/about">Об</Link>
            </MyButton>
            <MyButton>
               <Link to="/posts">Посты</Link>
            </MyButton>
         </div>
      </div>
   );
};

export default Navbar;
