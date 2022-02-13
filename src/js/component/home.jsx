import React, { useState, useEffect } from "react";
// Import components
import TodoList from "./TodoList.jsx";
// Import fetch
import { getTodos, updateTodos } from "../../Services/Todo.js";

const Home = () => {
	const [ListTodo, setListTodo] = useState([]);
	const [NewTodo, setNewTodo] = useState({ label: "", done: false });

	console.log(ListTodo);
	console.log({ NewTodo });

	const getAllTodos = () => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setListTodo(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getAllTodos();
	}, []);

	const handleClick = () => {
		const newList = [...ListTodo, NewTodo];
		updateTodos(newList)
			.then((res) => {
				getAllTodos();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const deleteTodo = (id) => {
		const deletetask = [...ListTodo];
		updateTodos(deletetask)
			.then((res) => {
				getAllTodos();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const printTodos = () => {
		return ListTodo.map((todo, index) => (
			<TodoList todo={todo} id={index} delete={deleteTodo} />
		));
	};

	return (
		<div>
			<div className="container d-flex justify-content-center col-5 p-3">
				<h1 className="text-white fw-light fs-1">YOUR TO DO LIST</h1>
			</div>
			<div className="container d-flex justify-content-center col-5 p-1">
				<div className="card-body">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Write yours task"
							aria-label="Add new tasks"
							aria-describedby="button-addon2"
							value={NewTodo}
							onChange={(e) => {
								setNewTodo(e.target.value);
							}}></input>
						<button
							onClick={handleClick}
							className="btn btn-outline-light">
							New Task
						</button>

						<div className="col-12 text-white p-2">
							{ListTodo.length === 0
								? "You can set your first task here"
								: printTodos()}
						</div>
						<p className="text-white border border-white p-2">
							Incomplete tasks {ListTodo.length}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
