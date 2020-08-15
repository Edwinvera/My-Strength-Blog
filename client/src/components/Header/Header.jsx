import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken } from '../../services/auth';
import './Header.css';

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/');
  }

  return (
    <header className= "header">
      <Link style={{textDecoration: "none"}} to='/'><h1>My Strength Blog</h1></Link>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </>
        ) : (
            <Link to='/login'>Login</Link>
        )
      }

      {
        props.currentUser && (
          <>
            <Link to="/movements">Add Movement</Link>
          </>
        )
      }
    </header>
  )
}
