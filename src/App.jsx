import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompuleteTodos, setIncompuleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompuleteTodos, todoText];
    setIncompuleteTodos(newTodo);
    setTodoText("");
  };

  const onClickDlete = (index) => {
    const newTodo = [...incompuleteTodos];
    //spliceでindex番目の1個を削除
    newTodo.splice(index, 1);
    //更新されたnewTodoをsetIncompuleteTodosに読み込ませる
    setIncompuleteTodos(newTodo);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompuleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompuleteTodos[index]];
    setIncompuleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const BackTodos = [...incompuleteTodos, completeTodos[index]];
    setIncompuleteTodos(BackTodos);
    setcompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompuleteTodos.length >= 5}
      ></InputTodo>
      {incompuleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}

      <InCompleteTodo
        Todos={incompuleteTodos}
        onClick={onClickComplete}
        onDelete={onClickDlete}
      ></InCompleteTodo>

      <CompleteTodo
        Todos={completeTodos}
        onClickBack={onClickBack}
      ></CompleteTodo>
    </>
  );
};
