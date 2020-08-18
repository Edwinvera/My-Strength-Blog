import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { verifyUser } from './services/auth';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify()
  }, [])

  const verify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main
        setCurrentUser={setCurrentUser}
      />
      <Footer />
      </div>
  );
}

export default App;
