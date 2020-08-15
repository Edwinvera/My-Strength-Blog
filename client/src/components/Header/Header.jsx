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
    
    <header className="header">

      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
      
      <Link style={{ textDecoration: "none" }} to='/'><h1>My Strength Blog</h1></Link>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
            </>
        ) : (
            <Link style={{textDecoration: "none" }} to='/login'>Login</Link>
        )
      }

      {
        props.currentUser && (
          <>
            <Link className='add-move-link' style={{textDecoration: "none"}} to="/movements">Add Movement</Link>
          </>
        )
      }
    </header>
  )
}
