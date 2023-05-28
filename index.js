require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const cardRoutes = require('./routes/cardRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cardRoutes);

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({error: 'Внутренняя ошибка сервера'});
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
