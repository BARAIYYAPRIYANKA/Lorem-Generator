import React, { useState } from "react";
import "./Generator.css";

function GeneratePara() {
  const random_paragraphs = [
    "The sun dipped below the horizon, casting a warm orange glow across the sky.",
    "Amidst the bustling city streets, a lone musician played a melancholic tune on his guitar.",
    "She walked along the beach, feeling the sand between her toes and the salt air on her skin.",
    "In the depths of the forest, a family of deer grazed peacefully among the trees.",
    "As the rain fell gently outside, he curled up with a book and a cup of tea.",
    "High above, the stars twinkled in the night sky, forming intricate patterns that had captivated humans for centuries.",
    "The old house creaked as the wind howled outside, creating an eerie atmosphere.",
    "In the distance, a waterfall cascaded down the mountainside, its roar echoing through the valley.",
    "She gazed out at the vast ocean, feeling a sense of awe at its endless expanse.",
    "The city was alive with activity, as people rushed to and fro, each with their own purpose and destination."
  ];

  const [number, setNumber] = useState("");
  const [generatedParagraphs, setGeneratedParagraphs] = useState([]);

  const handleClick = () => {
    if (number <= 0) {
      alert(" Please enter a  number");
    } else {
      if (number > 10) {
        alert("Ayyo! You are demanding too many paragraphs at once. Please choose a smaller number 😀");
        setNumber("10");
      }

      const paragraphs = [];
      for (let i = 0; i < number; i++) {
        paragraphs.push(
          <div key={i} className="result">
            {i + 1 + ". "}
            {random_paragraphs[Math.floor(Math.random() * random_paragraphs.length)]}
          </div>
        );
      }
      setNumber("");
      setGeneratedParagraphs(paragraphs);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">TIRED OF BORING LOREM IPSUM?</h2>
      <form>
        <label className="para" htmlFor="num">Paragraphs:</label>
        <input className="input" type="number" id="num" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button type="button" onClick={handleClick} className="btn">Generate</button>
      </form>
      {generatedParagraphs}
    </div>
  );
}

export default GeneratePara;
