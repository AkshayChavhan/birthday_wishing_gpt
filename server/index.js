import OpenAI from "openai";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(bodyParser.json());


const port = 3001;
const openai = new OpenAI({ apiKey: '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' });

const getPrompt = (musictype , name , direction ) => {

    return `
    Wish a happy birthday to ${name}.Ensure that "Happy birthday" is mentioned at
    least twice in the lyrics,and it should rhyme. The lyrics should use simple, short,
    and easy to pronounce words as much as possible. Using the above information, please
    write 16 lines of ${musictype} lyrics that I can dedicate to him for ${direction} birthday. Each line 
    can have maximum of 8 words or 40 characters.
    The lyrics generated should be completely unique and never written before every single
    time and should not in any way or manner infringe on any trademarks/copyrights or any other
    rights of any individual or entity anywhere in the world. Any references or similarity to
    existing lyrics of any song anywhere in the world needs to be completely avoided.
    Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned
    above needs to be completely avoided. The lyrics generated should not be insensitive or should
    not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/
    organisation or any entity or individual in any manner whatsoever. Any words which might be
    construed directly or indirectly as cuss words or are offensive in any language should also be
    completely avoided.
    `;
}


app.use(bodyParser.json());

app.post('/generate-lyrics', async (req, res) => {
    try {
        const { bname, gender , musicType } = req.body;
        const prompt = getPrompt( musicType , bname , (gender==='Male'?'him':'her' ));
        console.log(bname, gender , musicType);
        return
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        const generatedLyrics = response.choices[0]?.message?.content || '';

        res.json({ lyrics: generatedLyrics });
    } catch (error) {
        console.error('Error generating lyrics:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
