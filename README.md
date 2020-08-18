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

_**My Strength Blog** is Is a site where users will be able to track their powerlifting sessions and add notes and reflections on previous training sessions. Users wil lalso have the ability to add custom exercises._


<br>

## MVP

_The **My Strength Blog** MVP Will give users the ability to add, edit, and delete workouts. They'll be able to post sessions and create a collection of posts of past workouts._

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
      |___Footer
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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
