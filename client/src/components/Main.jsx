import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { readAllMovements } from '../services/movements';
import Login from './Login/Login';
import Register from './Register';
import ShowMovements from './ShowMovements';
import CreateMovement from './CreateMovement';
import MovementDetail from './MovementDetail';
import UpdateMovement from './UpdateMovement';

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
          setMovements={setMovements}
        />
      )} />

      <Route path='/movements/new' render={(props) => (
        <CreateMovement
          {...props}
          setMovements={setMovements}
          movements={movements}
        />
      )} />
      <Route exact path='/movements/:id' render={(props) => (
        <MovementDetail
          {...props}
        />
      )} />
      <Route path='/movements/:id/edit' render={(props) => (
        <UpdateMovement
          {...props}
          movements={movements}
          setMovements={setMovements}
        />
      )} />
    </main>
  )
}
