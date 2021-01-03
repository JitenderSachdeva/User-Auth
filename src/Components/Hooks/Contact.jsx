import React, { useState } from 'react';

const Contact = () => {
	const [computerLanguages, setComputerLanguages] = useState([
		{ id: 1, name: "PHP" },
		{ id: 2, name: "C#" },
		{ id: 3, name: "Java" },
		{ id: 4, name: "JavaScript" },
	]);

	var count = 5;

	function newCount() {
		return ++count;
	}
	const [name, setName] = useState("");

	const inputHandle = e => {
		setName(e.target.value);
	}
	const addlanguage = (e) => {
		e.preventDefault();
		setComputerLanguages([...computerLanguages, { id: newCount(), name: name }]);
		setName('');
	}

	return (
		<div className="container">
			<div className="py-4">
				<table className="table  border shadow">
					<thead className="thead-dark">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
						</tr>
					</thead>
					<tbody>
						{
							computerLanguages && computerLanguages.map((se) => {
								return (
									<tr>
										<td>{se.id}</td>
										<td>{se.name}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<form onSubmit={addlanguage}>
					<div className="form-group">
						<input type="text" className="form-control" value={name} onChange={inputHandle} placeholder="Add language" />
					</div>
					<div className="form-group">
						<button class="btn btn-primary btn-block">Submit</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact;