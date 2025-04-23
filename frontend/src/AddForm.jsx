import axios from "axios";
import React, { useState, useEffect } from "react";

const FunnyGunFailureForm = () => {
  const [description, setDescription] = useState("");
  const [failureType, setFailureType] = useState("");
  const [remainder, setRemainder] = useState("");
  const [entries, setEntries] = useState([]);

  // Fetch all failures from the server
  const fetchEntries = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Unable to fetch data from the server.");
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEntry = { description, failureType, remainder };

      // Save new entry to the server
      const response = await axios.post("http://localhost:3000/funny", newEntry);

      // Refresh the displayed entries
      setEntries([...entries, response.data.data]);

      // Reset form fields
      setDescription("");
      setFailureType("");
      setRemainder("");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Funny Gun Failure</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description Field */}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        {/* Failure Type Field */}
        <input
          type="text"
          placeholder="Failure Type"
          value={failureType}
          onChange={(e) => setFailureType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        {/* Remainder Field */}
        <input
          type="text"
          placeholder="Remainder"
          value={remainder}
          onChange={(e) => setRemainder(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      {/* Entries Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Submitted Entries</h2>
        {entries.length > 0 ? (
          <ul className="space-y-2">
            {entries.map((entry) => (
              <li key={entry._id} className="border p-2 rounded">
                <strong>{entry.description}</strong> - {entry.failureType} -{" "}
                {entry.remainder}
              </li>
            ))}
          </ul>
        ) : (
          <p>No entries have been submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default FunnyGunFailureForm;