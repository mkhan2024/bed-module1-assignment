import app from './app'; // imports the app from app.ts

const PORT = 3000; // port for the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});