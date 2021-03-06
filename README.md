# My-Strength-Blog
A website that allows users to track and log workouts. Users will also be able to make notes on the productivity of the session.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Strength HQ** is a site where users will be able to track their powerlifting sessions and add notes and reflections on previous training sessions. Users wil lalso have the ability to add custom exercises._


<br>

## MVP

_Users the ability to add, edit, and delete workouts. They'll be able to post sessions and create a collection of posts of past workouts._

<br>

### Goals

- _Track sessions._
- _Add, edit, and delete sessions._
- _Add, edit and make notes._
- _Create custom exercises._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Use react to organize sections._          |
|   React Router   | _Smooth transitions between pages._        |
|   Ruby on Rails  | _Help build the backend and frontend._     |

<br>

### Client (Front End)

#### Wireframes

https://whimsical.com/4yVzEa3H5938treyCEY3m7

#### Component Tree

https://whimsical.com/5tgWLq6cct2YBse3Dy6fCi

#### Component Hierarchy 

``` structure

src
|__ components/
      |__ CreateMovement
      |___Header
      |___Login
      |___Main
      |___MovementDetail
      |___NewPost
      |___Register
      |___Results
      |___ShowMovements
      |___Update Movement
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ movements.js
      |__ muscles.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|CreateMpvement| functional |   n   |   y   | _Create custom movement screen._      |
|    Header    | functional |   n   |   y   | _Links and heading._                  |
|    Login     | functional |   y   |   y   | _Login controller._                   |
|    Main      | functional |   y   |   y   | _Holds all routes._                   |
|MovementDetail|   class    |   y   |   y   | _Maps all of the movements, muscles._ |
|   NewPost    |   class    |   y   |   n   | _Calculators for performance report._ |
|   Register   | functional |   y   |   y   | _Register controller._                |
|   Results    | functional |   n   |   y   | _Displays performance results._       |
|ShowMovements | functional |   n   |   n   | _Maps all of the movements for user._ |
|UpdateMovement| functional |   y   |   y   | _Edit movements._                     |


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Backend       |    H     |     8 hrs      |     24 hrs    |    24 hrs   |
| Setup JSON          |    H     |     5 hrs      |     1 hrs     |    1 hrs    |
| Setup Components    |    H     |     24 hrs     |     24 hrs    |    24 hrs   |
| Setup Frontend CRUD |    H     |     12 hrs     |     12 hrs    |    12 hrs   |
| Styling             |    M     |     12 hrs     |     24 hrs    |    24 hrs   |
| Testing             |    H     |     5 hrs      |     2 hrs     |    2 hrs    |
| Total Time          |          |     66 hrs     |     87 hrs    |    87 hrs   |

<br>

### Server (Back End)

#### ERD Model

https://imgur.com/oXPjZOn

## Post-MVP

- Retrieve metrics like total volume/tonnage, total reps, and total sets.
- Be able to rate sessions using an RPE scale and get a representation or average across workouts.

***

## Code Showcase
```
<div className='move-list'>
      <h3>Add Strength Exercise</h3>
      {props.movements.map((lifts) => (
        <div key={lifts.id}>
          <Link to={`/movements/${lifts.id}`} style={{textDecoration: "none" }}><p>{lifts.name}</p></Link>
          <div className='edit-delete'>
            <Link to={`/movements/${lifts.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleClick(lifts.id)}>Delete</button>
          </div>
        </div>
      ))}
      <br/>
      <Link to='/movements/new'><button className='create-button'>Create</button></Link>
    </div>
```
## Code Issues & Resolutions

- My biggest issue was the way that I started. I set my tables all wrong. Something I'd definitely come back to when a passing grade isn't on the line. Overall, I learned a lot in the whole process.
