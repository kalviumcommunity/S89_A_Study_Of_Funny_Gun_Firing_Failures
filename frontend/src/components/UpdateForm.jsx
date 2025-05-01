import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    comment: '',
    description: '',
    failureType: '',
    remainder: '',
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/funny/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || '',
          comment: data.comment || '',
          description: data.description || '',
          failureType: data.failureType || '',
          remainder: data.remainder ? data.remainder.slice(0, 10) : '',
        });
      })
      .catch((err) => console.error('Error:', err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_BASE_URL}/funny/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Failure</h2>
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="failureType"
        value={form.failureType}
        onChange={handleChange}
        placeholder="Failure Type"
      />
      <input
        type="date"
        name="remainder"
        value={form.remainder}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
