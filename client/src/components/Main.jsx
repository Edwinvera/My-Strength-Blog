import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { readAllMovements } from '../services/movements';
import ShowMovements from './ShowMovements';
import CreateSession from './CreateSession';

export default function Main(props) {
  const { setCurrentUser } = props;

  const [movements, setMovements] = useState([]);

  useEffect(() => {
    getMovements()
  }, [])

  const getMovements = async () => {
    const powerlifts = await readAllMovements();
    setMovements(powerlifts);
  }

  return (
    <main>
      <Route path='/login' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route path='/register' render={(props) => (
        <Register
        {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route exact path='/movements' render={() => (
        <ShowMovements
          movements={movements}
        />
      )} />

      <Route path='/movements/new' render={() => (
        <CreateSession
          ShowMovements={setMovements}
        />
      )} />
    </main>
  )
}
