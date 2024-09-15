import { useState } from 'react';
import axios from 'axios'; 
import './App.css';

function App() {

  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(<p>Enter a query to get started!</p>);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      //'http://127.0.0.1:5500/query' -> docker
      // /query -> hugging face
      const res = await axios.post('http://127.0.0.1:5500/query', {
        query: query
      });

     
      setResponse(processText(res.data.response)); 

    } catch (error: any) {
      console.error('Error while sending query', error);
      setResponse(processText(error));
    } finally {
      setLoading(false);
    }
  };

  function processText(inputText: string): JSX.Element {
    
    
    const lines = inputText.split('\n');
    
    const elements: JSX.Element[] = [];
  
    lines.forEach((line, index) => {
      if (line.trim().startsWith('* **')) {
      
        elements.push(
          <li key={index}>
            <strong>{line.trim().slice(2).replace(/\*\*/g, '')}</strong>
          </li>
        );
      } else {
        
        const processedLine = line.replace(/\*\*(.*?)\*\*/g, (_, match) => `<strong>${match}</strong>`);
        elements.push(
          <p key={index} dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
    });
  
    
    return <div>{elements}</div>;
  }

  return (
    <>
      <div className="app-container">
        <nav className="logo">
          <h1>REASON AI</h1>
        </nav>

        
        <div id="response-container" className="response-container">
          {loading ? (
            <p>Loading...</p> 
          ) : (
            <div>
              {response}
              </div>
        
          )}
        </div>

        
        <form id="query-form" className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="query-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Ask something..."
            className="input-field"
            required
          />
          <button type="submit" id="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
