import React from "react";

export const InCompleteTodo = (props) => {
  const { Todos, onClick, onDelete } = props;
  return (
    <div className="incompulete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/**incompuleteTodosをmapで順番に取り出して処理 */}
        {Todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(index)}>完了</button>
                {/**何番目かのTodoかをonClickDleteに渡す */}
                <button onClick={() => onDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
