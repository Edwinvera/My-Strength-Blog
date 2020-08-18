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
      
      <Link style={{ textDecoration: "none" }} to='/'><h1 style={{ color: "white", border: "10px solid white" }}>Strength HQ</h1></Link>
      {
        props.currentUser ? (
          <div className='user-toggle'>
            <p>Welcome, {props.currentUser.username}!</p>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <Link style={{textDecoration: "none", color: "#709BFF" }} to='/login'><h3 style={{ color: 'white' }}>Login</h3></Link>
        )
      }

      {
        props.currentUser && (
          <div className= 'header-links'>
            <h3><Link className='add-move-link' style={{ textDecoration: "none", color: "white" }} to="/movements">Add Movement</Link></h3>
            <h3><Link className='add-post-link' style={{ textDecoration: "none", color: "white" }} to="/posts">Performance Report</Link></h3>
          </div>
        )
      }
    </header>
  )
}
