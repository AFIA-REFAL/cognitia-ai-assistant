import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

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
        `${BACKEND_URL}/ask`,
        { query }
      );

      setAnswer(res.data.answer);
    } catch (err) {
      const message = err?.response?.data?.details || err?.response?.data?.error || err?.message || 'Error fetching response';
      setAnswer(message);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
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