import React, { useEffect, useState } from 'react';

const FunnyGunFailures = () => {
  const [failures, setFailures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFailures = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/funny');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setFailures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFailures();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Funny Gun Failures</h2>
      <ul>
        {failures.map((failure) => (
          <li key={failure._id}>
            <strong>{failure.title}</strong> - {failure.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunnyGunFailures;