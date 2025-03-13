// import * as ai from '../services/ai.service';
const { generateResult } = require('../services/ai.service');

exports.getResult = async (req, res) => {
    try {
        // console.log('Received Body:', req.body);

        const { context, prompt, output } = req.body;

        // if (!context || !prompt) {
        //     return res.status(400).json({ message: "Missing 'context' or 'prompt' in request body" });
        // }

        const result = await generateResult(context, prompt, output);
        res.json({ message: "Success", result });
    } catch (error) {
        console.error('Error in getResult:', error);
        res.status(500).json({ message: error.message });
    }
};
