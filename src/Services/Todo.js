const API_URL = "https://assets.breatheco.de/apis/fake/todos/user/GuillermoSR";

export const getTodos = () => {
	return fetch(API_URL);
};
export const updateTodos = (data) => {
	return fetch(API_URL, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
