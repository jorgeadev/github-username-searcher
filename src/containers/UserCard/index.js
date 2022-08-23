import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";
import PersonalInforamtion from "../../components/PersonalInforamtion";
import Description from "../Description";

const UserCard = ({ user }) => {

	const { avatar_url } = user;

	return (
		<Grid
			container
			spacing={ 2 }
			sx={{ marginTop: '15px' }}
		>
			<Grid item xs={ 3 }>
				<CardMedia
					component="img"
					alt="Github Username"
					image={ avatar_url }
					sx={{ borderRadius: "50%", marginLeft: "5px" }}
				/>
			</Grid>
			<Grid item xs={ 9 }>
				<Stack
					direction="column"
					spacing={ 1 }
					sx={{ margin: "10px 30px" }}
				>
					<PersonalInforamtion user={ user } />
					<Description user={ user } />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default UserCard;
