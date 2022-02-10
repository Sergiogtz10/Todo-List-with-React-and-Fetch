import React, { useState } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const TodoList = (props) => {
	console.log({ props });
	return (
		<ul class="list-group list-group-flush">
			<li class="list-group-item bg-transparent text-white border border-white">
				{props.todo}
				<i
					className="far fa-trash-alt p-1"
					onClick={() => props.delete(props.id)}></i>
			</li>
		</ul>
	);
};
TodoList.propTypes = {
	todo: PropTypes.string,
	id: PropTypes.number,
	delete: propTypes.func,
};
export default TodoList;
