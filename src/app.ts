import express from 'express'; // brings in express for the server
import routes from './api/v1/routes/index'; // imports routes

const app = express();
app.use(express.json()); // for body parsing if needed

app.use('/api/v1', routes); // uses the routes

export default app;