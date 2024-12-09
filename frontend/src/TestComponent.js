import { useEffect } from 'react';
import axios from 'axios';

function TestComponent() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/events.php', {
          name: 'Tech Fest',
          date: '2024-12-15',
        });
        console.log(response.data); // Check the response in the console
      } catch (error) {
        console.error('Error:', error);
      }
    };
    testAPI();
  }, []);

  return <div>Check your console for the response.</div>;
}

export default TestComponent;
