import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; 
const app = express();

const corsOption = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:50001', 'http://localhost:50002'];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOption));
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', userRoutes); // Mount router on /api

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 50001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
