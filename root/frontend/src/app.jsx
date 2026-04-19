import { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!query) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/ask',
        { query }
      );

      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("Error fetching response");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Assistant</h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={askAI}>Ask</button>

      {loading && <p>Loading...</p>}

      {answer && (
        <div className="response">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;