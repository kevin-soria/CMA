import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { actions, store } = useContext(Context);
	const [phone, setPhone] = useState(store.contacts[props.match.params.ind].phone);
	const [name, setName] = useState(store.contacts[props.match.params.ind].full_name);
	const [email, setEmail] = useState(store.contacts[props.match.params.ind].email);
	const [address, setAddress] = useState(store.contacts[props.match.params.ind].address);

	const [objContact, setObjContact] = useState();
	// console.log(props);
	useEffect(
		contact => {
			setObjContact({
				agenda_slug: "kevs_agenda",
				full_name: name,
				email: email,
				phone: phone,
				address: address
			});
			console.log(name);
		},
		[name, email, phone, address]
	);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Current contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={name}
							onChange={e => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => actions.EditContact(objContact.id)}>
							save Contact
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
