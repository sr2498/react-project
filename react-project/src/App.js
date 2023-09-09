import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo text="Read React" />
      <Todo text="Understand React" />
      <Todo text="Apply React" />
    </div>
  );
}

export default App;
