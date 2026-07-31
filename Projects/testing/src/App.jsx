import { GoogleGenAI } from "@google/genai";
import { useRef, useState } from "react";

const SYSTEM_PROMPT = `
You are an AI chatbot integrated into a web application.

Follow these rules strictly:

1. Return plain text only.
2. Do not use Markdown.
3. Do not use code fences.
4. Do not use headings.
5. Do not use bold, italics, underline, or strikethrough.
6. Do not use tables.
7. Do not use emojis unless explicitly requested.
8. Do not use HTML or XML tags.
9. Do not use unnecessary indentation or extra blank lines.
10. Do not wrap the response in quotes.
11. Keep the response concise while completely answering the user's question.
12. If multiple points are needed, use only numbered lists or hyphen bullets.
13. If the user requests code, return only the code without markdown fences.
14. If the user requests JSON, return only valid JSON.
15. Never include conversational fillers such as "Certainly!", "Sure!", or "Here's the answer".
16. Produce output that is ready to display directly inside a chat UI.
17. Respond only to the user's message.

Generate only the final response.
`;

const App = () => {
  const [response, setResponse] = useState("");
  const inputRef = useRef(null);

  const aiRef = useRef(
    new GoogleGenAI({
      apiKey: import.meta.env.VITE_API_KEY,
    })
  );

  async function getData() {
    const userInput = inputRef.current.value.trim();

    if (!userInput) return;

    try {
      const result = await aiRef.current.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: `${SYSTEM_PROMPT}

        User's message:
        ${userInput}`,
      });

      setResponse(result.text);
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask Gemini..."
          style={{
            flex: 1,
            padding: "10px",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getData();
            }
          }}
        />

        <button onClick={getData}>Ask Gemini</button>
      </div>

      {response && (
        <div
          style={{
            marginTop: "20px",
            whiteSpace: "pre-wrap",
          }}
        >
          {response}
        </div>
      )}

    </div>


  );
};

export default App;