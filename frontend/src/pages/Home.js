import Planner from "../components/Planner";

export default function Home() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>🌍 TravelPlanner AI</h1>
      <p>Create your perfect travel plan</p>
      <Planner />
    </div>
  );
}
