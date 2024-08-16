const express = require('express');
const cors = require('cors');

const app = express();


const corsOption = {
    origin: function (origin, callback) {
      const allowedOrigins =['http://localhost:5001', 'http://localhost:5002'];
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
app.use(cors(corsOption));

const PORT = process.env.PORT || 50001; 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
