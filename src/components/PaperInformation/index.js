import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const PaperInformation = ({ user }) => {

	const { public_repos, followers, following } = user;

	return (
		<Paper elevation={ 20 }>
			<Stack
				spacing={ 3 }
				direction="row"
				sx={{ justifyContent: "space-between", margin: "1rem 2rem" }}
			>
				<Stack direction="column">
					<Typography	variant="h5">Repos</Typography>
					<Typography	variant="h6">{ public_repos }</Typography>
				</Stack>
				<Stack direction="column">
					<Typography	variant="h5">Followers</Typography>
					<Typography	variant="h6">{ followers }</Typography>
				</Stack>
				<Stack direction="column">
					<Typography	variant="h5">Following</Typography>
					<Typography	variant="h6">{ following }</Typography>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default PaperInformation;
