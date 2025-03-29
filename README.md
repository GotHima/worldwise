# About this project

This project was created using Vite + React

# How to run this project

Open a terminal and run the JSON server
`npm run server`

Open another terminal and run the React app using Vite
`npm run dev`

# Component structure

## Contexts

- CitiesContext
  - source: `src\contexts\CitiesContext.jsx`
  - provides access to the remote server to: load a city/all cities, create a new city, delete a city
  - keeps track of the currently selected city

## Hooks

- useUrlPosition
  - source: `src\hooks\useUrlPosition.js`
  - parses the lat & long params in url

## Components

- Form

  - source: `src\components\Form.jsx`
  - retrieves location related info using reverse geocoding based on the coordinates in url
  - captures user-provided input in a `<form>` to create a new city

- Map
  - source: `src\components\Map.jsx`
  - displays an interactive map using Leaflet (OpenStreetMap)
