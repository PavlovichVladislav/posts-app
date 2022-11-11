import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
   const { setIsAuth } = useContext(AuthContext);

   const login = (e) => {
      e.preventDefault();
      setIsAuth(true);
      localStorage.setItem('posts/auth', 'true');
   };

   return (
      <div>
         <h1>Строница авторизации</h1>
         <form onSubmit={login}>
            <MyInput type="text" placeholder="логин" />
            <MyInput type="password" placeholder="пароль" />
            <MyButton>Войти</MyButton>
         </form>
      </div>
   );
};

export default Login;
