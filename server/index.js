import OpenAI from 'openai';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from "./model/User.model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getPrompt = (musicType, name, direction) => {
  return `
    Wish a happy birthday to ${name}. Ensure that "Happy birthday" is mentioned at
    least twice in the lyrics, and it should rhyme. The lyrics should use simple, short,
    and easy-to-pronounce words as much as possible. Using the above information, please
    write 16 lines of ${musicType} lyrics that I can dedicate to him for ${direction} birthday. Each line 
    can have a maximum of 8 words or 40 characters.
    The lyrics generated should be completely unique and never written before every single
    time and should not in any way or manner infringe on any trademarks/copyrights or any other
    rights of any individual or entity anywhere in the world. Any references or similarity to
    existing lyrics of any song anywhere in the world needs to be completely avoided.
    Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned
    above needs to be completely avoided. The lyrics generated should not be insensitive or should
    not offend any person/place/caste/religion/creed/tribe/country/gender/government/
    organization, or any entity or individual in any manner whatsoever. Any words which might be
    construed directly or indirectly as cuss words or are offensive in any language should also be
    completely avoided.
    `;
};

app.post("/api/register", async (req, res) => {
  try {
    const {
      phoneNumber,
      fullname,
      emailId
    } = req.body;

    const user = new User({
      phoneNumber,
      fullname,
      emailId
    });

    await user.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/api/generate-lyrics', async (req, res) => {
  try {
    const { bname, gender, musicType } = req.body;
    const prompt = getPrompt(musicType, bname, gender === 'Male' ? 'him' : 'her');
    console.log(bname, gender, musicType);

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

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error.message);
  }
};

startServer();
