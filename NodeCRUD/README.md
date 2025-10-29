# NodeCRUD

Simple RESTful API with **Node.js**, **Express**, and **MongoDB**, implementing CRUD operations for notes.

## Features

- Create, read, update, and delete notes  
- Modular structure: **routes**, **controllers**, **models**, & **config**  
- Error handling with proper HTTP status codes  
- JSON responses

## Technologies

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- dotenv  
- Postman (for testing GET, POST, PUT, DELETE requests)

## API Endpoints

- **GET** `/api/notes` – Get all notes
- **GET** `/api/notes/:id` - Get note by ID
- **POST** `api/notes` – Create a new note  
- **PUT** `api/notes/:id` – Update a note by ID  
- **DELETE** `api/notes/:id` – Delete a note by ID
