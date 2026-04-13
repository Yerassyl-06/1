import { useState } from "react";

export default function Planner() {
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    const res = await fetch("http://localhost:5000/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, budget }),
    });

    const data = await res.json();
    setPlan(data.plan);
  };

  return (
    <div>
      <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
      <input placeholder="Budget" onChange={(e) => setBudget(e.target.value)} />
      <button onClick={generatePlan}>Generate</button>

      <p>{plan}</p>
    </div>
  );
}
