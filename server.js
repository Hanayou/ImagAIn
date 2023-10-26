import * as dotenv from 'dotenv';
dotenv.config();

// OpenAI API config setup
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI,
});

// Express server setup
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/imagAIn', async (req, res) => {

    const prompt = req.body.prompt;

    const aiResponse = await openai.images.generate({
        prompt,
        n: 1,
        size: '1024x1024',
    });

    const image = aiResponse.data.data[0].url;
    res.send({ image });
});

app.listen(8080, () => console.log('makeart on http://localhost:8080/imagAIn'));