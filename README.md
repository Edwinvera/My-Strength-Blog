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
|__ assets/
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |___Login.jsx
      |___Register.jsx
      |___AddEditAcc.jsx
      |___Str_Dropdown.jsx
      |___Acc_Dropdown.jsx
      |___Logout_Btn.jsx
|__ screens/
      |__ Main_Login.jsx
      |__ Register.jsx
      |__ Create_Post.jsx
      |__ Add_Accessory.jsx
      |__ Edit_Posts.jsx
      |__ User_Posts.jsx

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | class |   n   |   n   | _The header will contain the navigation and logo._               |
|    Login     | class |   y   |   n   | _The login will allow user to sign in to their account._         |
|   Register   | class |   y   |   n   | _The register component will allow new users start an account._  |
|  AddEditAcc  | class |   y   |   y   | _This will let the user add and edit accessory._                 |
|  Str_Dropdown| class |   y   |   y   | _Will hold opitons for choosing main movement for that day._.    |
|  Acc_Dropdown| class |   y   |   y   | _Will hold opitons for choosing accessory movement for that day._|
|  Logout_Btn  | class |   y   |   y   | _Give use ability to logout._                                    |
|  Profile_Btn | class |   y   |   y   | _Give use ability to logout._                                    |


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Backend       |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| Setup JSON          |    H     |     5 hrs      |     0 hrs     |    0 hrs    |
| Setup Components    |    H     |     24 hrs     |     0 hrs     |    0 hrs    |
| Setup Frontend CRUD |    H     |     12 hrs     |     0 hrs     |    0 hrs    |
| Styling             |    M     |     12 hrs     |     0 hrs     |    0 hrs    |
| Testing             |    H     |     5 hrs      |     0 hrs     |    0 hrs    |
| Total Time          |          |     66 hrs     |     0 hrs     |    0 hrs    |

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
