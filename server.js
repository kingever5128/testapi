const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
require('dotenv').config();
const auth = require('json-server-auth');
const app = express();
const port = process.env.PORT_VAL;

// Configure CORS
app.use(cors({
  origin: 'http://192.168.2.170:3000' 
}));

// Apply json-server-auth middleware
app.db = router.db;
app.use(auth);

// JSON Server
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
