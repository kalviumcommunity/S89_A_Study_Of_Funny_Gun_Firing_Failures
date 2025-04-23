import { useState, useEffect } from "react";
import axios from "axios";

const AddForm = () => {
  const [description, setDescription] = useState("");
  const [failureType, setFailureType] = useState("");
  const [remainder, setRemainder] = useState("");
  const [failures, setFailures] = useState([]);

  const fetchFailures = async () => {
    const res = await axios.get("/api/funny");
    setFailures(res.data);
  };

  useEffect(() => {
    fetchFailures();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/funny", { description, failureType, remainder });
      setDescription("");
      setFailureType("");
      setRemainder("");
      fetchFailures();
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Funny Gun Failure</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Failure Type"
          value={failureType}
          onChange={(e) => setFailureType(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Remainder"
          value={remainder}
          onChange={(e) => setRemainder(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Submitted Entries</h3>
      <ul>
        {failures.map((f, index) => (
          <li key={index} className="border-b py-1">
            <strong>{f.description}</strong> - {f.failureType} - {f.remainder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddForm;
