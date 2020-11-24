import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo, getTodos, updateTodo } from "./api";
import { useForm } from "react-hook-form";


export const EditTodo = () => {
  const match = useRouteMatch()
  const [todo, setTodo] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });
  const history = useHistory()

  useEffect(() => {
      const fetchTodo = async () =>{
      const todo = await getTodo(match.params.id)
      setTodo(todo)
    }
    fetchTodo()
  }, []);

  const onSubmit = async(data) => {
    await updateTodo(data, match.params.id)
    history.push("/")
  }

  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <TodoForm todo={todo} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};




