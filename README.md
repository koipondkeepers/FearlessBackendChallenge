# Fearless Takehome Project

This project is written in Node and Express.

## Available Scripts

Within the main project directory you can run:

### `npm install`

This installs all the packages needed to run this project. Make sure you run this first before running `npm start`.

### `npm start`

This runs the app, which you can either use an API Client (such as Postman or Insomnia) to access.

## Running the Docker Container

First begin by making sure you have Docker installed and that it is running. You can check if it's installed by going to the shell of your choice and typing `docker -v`, and then seeing if it's running by typing `docker version`. Neither should return any errors if you have done this correctly.

Once that is working, you can run `docker build -t express .` to build the image of the container. After that finishes, you can run `docker run -p 3000:3000 express` to have the application running like normal. 