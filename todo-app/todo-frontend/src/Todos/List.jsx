import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <React.Fragment key={todo._id}>
          <hr />
          <Todo todo={todo} onDelete={deleteTodo} onComplete={completeTodo} />
        </React.Fragment>
      ))}
    </>
  );
};

export default TodoList;
