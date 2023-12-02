import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      navigate('/login');
    }).catch((error) => {
      console.log(error)
    });
  };
  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウトする</button>
    </div>
  )
}

export default Logout
