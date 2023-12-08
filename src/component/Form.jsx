// BirthdayForm.js

import React, { useState } from "react";
import axios from "axios";

const BirthdayForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [songLyrics, setSongLyrics] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/generate-lyrics",
        {
          name,
          gender,
        }
      );

      setSongLyrics(response.data.lyrics);
    } catch (error) {
      console.error("Error fetching lyrics:", error.message);
    }
  };

  return (
    <div>
      <h1>Birthday Song Lyrics Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <button type="submit">Generate Birthday Song Lyrics</button>
      </form>
      <div>
        {songLyrics && (
          <div>
            <h2>Birthday Song Lyrics:</h2>
            <p>{songLyrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayForm;
