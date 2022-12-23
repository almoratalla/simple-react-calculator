# [Simple React Calculator](https://github.com/almoratalla/simple-react-calculator)

> A simple calculator using ReactJS

## Table of Contents

-   [Simple React Calculator](#simple-react-calculator)
    -   [Table of contents](#table-of-contents)
    -   [Overview](#overview)
    -   [Features](#features)
    -   [Demo](#demo)
    -   [Tech Stack](#tech-stack)
        -   [Built with](#built-with)
    -   [Run Locally and Setup](#run-locally-and-setup)
    -   [Author](#author)
    -   [Acknowledgments](#acknowledgments)
        -   [Useful resources](#useful-resources)
    -   [License](#license)

## Overview

This project is made using Vite to create a simple react calculator.

Code is bootstrapped from other sources but implemented in a way that will separate
stateful `smart` components to stateless `dumb` components.

This also utilizes the React Context API for state management.

```bash
Project structure
src
    ├───components  ---> Contains the `stateless|dumb` components
    │   ├───CalculatorKey
    │   ├───Display
    │   └───Keypad
    ├───containers  ---> Contains the `stateful|smart` components
    │   └───App
    ├───interfaces
    ├───store
    └───utils
```

## Features

-   4 Basic operations
-   Percent and change sign key

## Demo

Swagger:  
![Calculator Demo](./resources/calc-demo.gif)

## Tech Stack

**Frontend:** React, Vite

### Built With

-   React
-   Typescript
-   Vite
-   HTML, CSS

## Initial Requirements

1. Node.js (version 16, 18 or higher) & Npm (version 8 or higher)  
   -- refer here for installation: [nodejs.org](https://nodejs.org/en/download/)
2. MySQL or switch with db provider of your choice  
   -- refer here for installation [dev.mysql.com](https://dev.mysql.com/downloads/installer/)

## Run Locally and Setup

1. Clone the project

```bash
  git clone git@github.com:almoratalla/simple-react-calculator.git
```

2. Go to the project directory

```bash
  cd simple-react-calculator
```

3. Install dependencies

```bash
  npm install
```

4. Deployment instructions

-   For Development :

```bash
  npm run dev
```

-   For Production

```bash
  npm run build
```

## Author

-   [Alain Moratalla](https://www.github.com/almoratalla)

## Acknowledgements

This project is structured from a diagnostic exam for ReactJS. All the concepts for this project is heavily inspired by the said requirement and from the following resources.

### Useful Resources

-   [React Calculator on CodePen](https://codepen.io/mjijackson/pen/xOzyGX?editors=1111) - Reference calculator

-   [Simple Calculator](https://github.com/TommmyKelly/react-calculator) - Didn't have to reinvent the wheel.

## License

Simple React Calculator is [MIT licensed](./LICENSE)
