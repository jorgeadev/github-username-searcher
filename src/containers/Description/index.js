import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = ({ user }) => {

	const { bio,  } = user;

	return (
		<Fragment>
			<Stack
				sx={{ justifyContent: "center" }}
			>
				<Typography variant="body1">
					{ bio !== null ? bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam asperiores at aut delectus eligendi facere maiores." }

				</Typography>
			</Stack>
			<PaperInformation user={ user } />
			<LocationInformation user={ user } />
		</Fragment>
	);
};

export default Description;
