import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../JS/actions/todoactions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const add = () => {
    const newTodo = {
      isDone: false,
      id: Math.random(),
      text: todoText,
    };

    if (todoText === "") return alert("Please enter a valid text");

    dispatch(addTodo(newTodo));

    setTodoText("");
  };

  return (
    <div>
      <input
        placeholder="Todo text ..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button onClick={() => add()}>Add todo</button>
    </div>
  );
};

export default AddTodo;
