// src/components/UpdateForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', comment: '' });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/funny/${id}`)
      .then(res => res.json())
      .then(data => setForm({ title: data.title, comment: data.comment }))
      .catch(err => console.error('Error:', err));
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
    navigate('/'); // Navigate back to the list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Failure</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="comment"
        value={form.comment}
        onChange={handleChange}
        placeholder="Comment"
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
