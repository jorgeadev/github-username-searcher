import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

const PersonalInformation = ({ user }) => {

	const { name, login, created_at } = user;

	return (
		<Fragment>
			<Stack
				direction="row"
				sx={{ justifyContent: "space-between" }}
			>
				<Typography variant="h4">{ name }</Typography>
				<Typography variant="subtitle2">{ created_at }</Typography>
			</Stack>
			<Typography variant="caption" component="h3">{ `@${ login }` }</Typography>
		</Fragment>
	);
};

export default PersonalInformation;
