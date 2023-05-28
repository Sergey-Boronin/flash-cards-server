const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/cards', cardController.createCard);
router.get('/cards/:id', cardController.getCardById);
router.put('/cards/:id', cardController.updateCard);
router.get('/cards', cardController.getAllCards);
router.delete('/cards/:id', cardController.deleteCard);

module.exports = router;
