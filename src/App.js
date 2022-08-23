import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { getGithubUser } from "./services/users";
import UserCard from "./containers/UserCard";

const App = () => {

	const [inputUser, setInputUser] = useState("octocat");
	const [userState, setUserState] = useState(inputUser);
	const [notFound, setNotFound] = useState(false);



	useEffect(() => {
		getGithubUser(inputUser).then(data => {
			if (inputUser === "octocat") {
				localStorage.setItem("octocat", JSON.stringify(data));
			}

			if (data.message === "Not Found") {
				const octocat = JSON.parse(localStorage.getItem("octocat"));
				setUserState(octocat);
				setNotFound(true);
			} else {
				setUserState(data);
				setNotFound(false);
			}
		});
	}, [inputUser]);


	return (
		<Container sx={{
			background: 'whitesmoke',
			width: '80vw',
			minHeight: '500px',
			borderRadius: '16px',
			marginTop: '40px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}}>
			<Searcher setInputUser={ setInputUser }/>
			<UserCard user={ userState } notFound={ notFound }/>
		</Container>
	);
}

export default App;