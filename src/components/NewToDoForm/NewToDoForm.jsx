import { useState } from "react";
import classes from './NewToDoForm.module.css';

const NewToDoForm = ({onSubmit}) => {
	const [newItem, setNewItem] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		if (newItem === "") return;

		onSubmit(newItem);

		setNewItem("");
	};

	return (
		<form onSubmit={submitHandler} className={classes["new-item-form"]}>
			<div className={classes["form-row"]}>
				<label htmlFor="item">New Item</label>
				<input
					value={newItem}
					onChange={event => setNewItem(event.target.value)}
					type="text"
					id="item"
				/>
			</div>

			<button className={classes["btn"]}>Add</button>
		</form>
	);
};

export default NewToDoForm;
