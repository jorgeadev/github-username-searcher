import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Twitter, Business, Language, LocationOn } from "@mui/icons-material";


const LocationInformation = ({ user }) => {
	console.log(user);

	const { location, twitter_username, blog, company } = user;

	return (
		<Grid
			container
			spacing={ 2 }
			sx={{ marginTop: "1rem" }}
		>
			<Grid item xs={ 6 }>
				<Stack direction="row" spacing={ 2 }>
					<LocationOn />
					{ location !== null ? <Typography>{ location }</Typography> : <Typography>No location</Typography> }
				</Stack>
			</Grid>
			<Grid item xs={ 6 }>
				<Stack direction="row" spacing={ 2 }>
					<Twitter />
					{ twitter_username !== null ? <Typography>{ `@${ twitter_username }` }</Typography> : <Typography>No twitter username</Typography> }
				</Stack>
			</Grid>
			<Grid item xs={ 6 }>
				<Stack direction="row" spacing={ 2 }>
					<Language />
					{ blog !== null && blog !== "" ? <a href={ blog } target="_blank"><Typography>{ blog }</Typography></a> : <Typography>No blog</Typography> }
				</Stack>
			</Grid>
			<Grid item xs={ 6 }>
				<Stack direction="row" spacing={ 2 }>
					<Business />
					{ company !== null ? <Typography>{ company }</Typography> : <Typography>No company</Typography> }
				</Stack>
			</Grid>
		</Grid>
	);
};

export default LocationInformation;
