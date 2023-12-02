import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true);
        navigate('/');
      }).catch((error) => {
        console.log(error)
      });
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
