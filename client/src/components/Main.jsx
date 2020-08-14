import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { readAllMovements } from '../services/movements';
import ShowMovements from './ShowMovements';
import CreateMovement from './CreateMovement';
import MovementDetail from './MovementDetail';

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

      <Route path='/movements/new' render={(props) => (
        <CreateMovement
          {...props}
          setMovements={setMovements}
          movements={movements}
        />
      )} />
      <Route path='/movements/:id' render={(props) => (
        <MovementDetail
          {...props}
        />
      )} />
    </main>
  )
}
