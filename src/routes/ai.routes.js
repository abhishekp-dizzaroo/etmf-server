const express = require('express');
const aiController = require('../controllers/ai.controller');

const router = express.Router();

// Route to get AI generation result
router.post('/get-result', aiController.getResult);

module.exports = router;