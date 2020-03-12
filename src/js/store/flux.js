import { AddContact } from "../views/AddContact";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [
				{
					username: "",
					email: "",
					tt: ""
				}
			]

			//Your data structures, A.K.A Entities
		},
		actions: {
			onDelete: bubu => {
				console.log(bubu);
				fetch("https://3000-d5a4c0e7-ef79-4dfa-bd72-53e0c821f70e.ws-us02.gitpod.io/user/" + bubu, {
					method: "delete"
				})
					.then(response =>
						response.json().then(json => {
							return json;
						})
					)
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			loadSomeData: () => {
				fetch("https://3000-d5a4c0e7-ef79-4dfa-bd72-53e0c821f70e.ws-us02.gitpod.io/user")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// console.log("im working");
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			AddContact(myObj, props) {
				console.log(myObj);
				fetch("https://3000-d5a4c0e7-ef79-4dfa-bd72-53e0c821f70e.ws-us02.gitpod.io/newuser/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(myObj)
				}).catch(e => console.error("errrrror in add" + e));
			},
			EditContact: (bubu, tiger, tutu, mama, gigi) => {
				fetch("https://3000-d5a4c0e7-ef79-4dfa-bd72-53e0c821f70e.ws-us02.gitpod.io/user/" + gigi, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: bubu,
						phone: mama,
						address: tutu,
						email: tiger
					})
				}).catch(e => console.error("errrrror" + e));
			}
			// onDelete: bubu => {
			// console.log(bubu);
			// fetch("https://assets.breatheco.de/apis/fake/contact/" + bubu, {
			// 	method: "delete"
			// })
			// 	.then(response =>
			// 		response.json().then(json => {
			// 			return json;
			// 		})
			// 	)
			// 	.catch(function(error) {
			// 		console.log("Looks like there was a problem: \n", error);
			// 	});
		}
	};
};

export default getState;
