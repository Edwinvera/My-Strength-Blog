import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { verifyUser } from './services/auth';
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
    </div>
  );
}

export default App;
