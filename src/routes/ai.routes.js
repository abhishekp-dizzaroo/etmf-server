const express = require('express');
const { getResult } = require('../controllers/ai.controller');

const router = express.Router();

// Route to get AI generation result
router.post('/get-result', getResult);

module.exports = router;