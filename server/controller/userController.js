import { User } from "../model/User.model.js";
import jwt from "jsonwebtoken";
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
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

const RegisterUserController = async (req, res) => {
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

        const token = jwt.sign({
            userId: user._id, email: emailId
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        await user.save();

        res.status(200).json({ message: "User registered successfully", token: token });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const generateLyricsController = async (req, res) => {
    try {
        const { bname, gender, musicType } = req.body;
        const prompt = getPrompt(musicType, bname, gender === 'Male' ? 'him' : 'her');

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
};


export { RegisterUserController, generateLyricsController }