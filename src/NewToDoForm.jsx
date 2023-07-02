import { useState } from "react";
import './app.css';

const NewToDoForm = ({onSubmit}) => {
	// props.onSubmit; // why this line ???????????
	const [newItem, setNewItem] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		if (newItem === "") return;

		onSubmit(newItem);

		setNewItem("");
	};

	return (
		<form onSubmit={submitHandler} className="new-item-form">
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					value={newItem}
					onChange={event => setNewItem(event.target.value)}
					type="text"
					id="item"
				/>
			</div>

			<button className="btn">Add</button>
		</form>
	);
};

export default NewToDoForm;
