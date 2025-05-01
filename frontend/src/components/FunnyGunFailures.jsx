// src/components/FunnyGunFailures.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FunnyGunFailures = () => {
  const [failures, setFailures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchFailures = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}`);
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      console.log(data)
      setFailures(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFailures();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this failure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/funny/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete entity');
      fetchFailures(); // Refresh after deletion
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Funny Gun Failures</h2>
      <ul>
        {failures.map((failure) => (
          <li key={failure._id}>
            <strong>{failure.description}</strong> - {failure.failureType}
            <button onClick={() => navigate(`/edit/${failure._id}`)}>Edit</button>
            <button onClick={() => handleDelete(failure._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunnyGunFailures;
