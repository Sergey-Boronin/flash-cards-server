const Card = require('../models/Card');

// Добавление карточки
exports.createCard = async (req, res) => {
  try {
    const {term, definition} = req.body;
    const card = await Card.create({term, definition});
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({error: 'Не удалось создать карточку'});
  }
};

// Получение карточки по id
exports.getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({error: 'Карточка не найдена'});
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({error: 'Не удалось получить карточку'});
  }
};

// Редактирование карточки
exports.updateCard = async (req, res) => {
  try {
    const {term, definition} = req.body;
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      {term, definition},
      {new: true},
    );
    if (!card) {
      return res.status(404).json({error: 'Карточка не найдена'});
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({error: 'Не удалось обновить карточку'});
  }
};

// Получение всех карточек
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({error: 'Не удалось получить карточки'});
  }
};

// Удаление карточки по id
exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ error: 'Карточка не найдена' });
    }
    res.json({ message: 'Карточка успешно удалена' });
  } catch (error) {
    res.status(500).json({ error: 'Не удалось удалить карточку' });
  }
};
