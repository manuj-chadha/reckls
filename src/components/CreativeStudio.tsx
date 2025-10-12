import React, { useState } from "react";

const CreativeStudio: React.FC = () => {
  const [focus, setFocus] = useState("Management");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("Your generated content will appear here. Select a focus and enter a prompt to start.");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = ""; // <-- Add your Gemini API key here
  const apiUrl =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";

  async function exponentialBackoffFetch(url: string, options: RequestInit, maxRetries = 5): Promise<Response> {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch(url, options);
        if (response.ok) return response;
        if (response.status === 429 && attempt < maxRetries - 1) {
          const delay = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || `API call failed with status: ${response.status}`);
        }
      } catch (error) {
        if (attempt === maxRetries - 1) throw error;
      }
    }
    throw new Error("Max retries exceeded");
  }

  const generateLLMContent = async () => {
    if (!prompt.trim()) {
      setOutput("Please enter a creative prompt before generating content.");
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("Generating content...");

    try {
      const response = await exponentialBackoffFetch(`${apiUrl}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `Focus: ${focus}. Prompt: ${prompt}` }],
            },
          ],
        }),
      });

      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No content generated. Try rephrasing your prompt.";
      setOutput(text);
    } catch (err: any) {
      setError(err.message || "Something went wrong while generating content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="creative-studio" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-50 font-serif">
            RECKLS Creative Studio ✨
          </h3>
          <p className="mt-4 text-lg text-gray-400">
            Use Gemini to instantly generate content drafts for your specific business needs.
          </p>
        </div>

        <div className="mt-10 bg-[#1E1E1E] p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Select Creative Focus
              </label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full p-3 bg-[#2C2C2C] border border-gray-600 rounded-lg text-gray-50 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="Management">Artist Management (Pitch Emails, Bios)</option>
                <option value="Production">Music Production (Track Concepts, Captions)</option>
                <option value="Promotion">Live Event Promotion (Event Descriptions, Hype Copy)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Your Creative Prompt
              </label>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Write a 50-word press release snippet for a new electro-house track called 'Reckless Energy'"
                className="w-full p-3 bg-[#2C2C2C] border border-gray-600 rounded-lg text-gray-50 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <button
            onClick={generateLLMContent}
            disabled={loading}
            className="w-full bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-teal-500 transition-colors flex items-center justify-center disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <span>{loading ? "Generating..." : "Generate Content ✨"}</span>
            {loading && (
              <div className="ml-3 h-5 w-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            )}
          </button>

          <div
            id="output-area"
            className="mt-8 p-6 bg-[#2C2C2C] rounded-lg border border-teal-500/50 min-h-[100px] shadow-inner whitespace-pre-wrap"
          >
            <p className="text-gray-400">{output}</p>
          </div>

          {error && (
            <div className="mt-4 text-red-400 text-center font-bold p-3 bg-red-900/50 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreativeStudio;
