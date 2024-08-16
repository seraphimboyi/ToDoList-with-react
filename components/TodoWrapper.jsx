import CreateForm from "./CreateForm";
import ToDo from "./ToDo";

function TodoWrapper() {
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm />
      <ToDo />
    </div>
  );
}

export default TodoWrapper;
