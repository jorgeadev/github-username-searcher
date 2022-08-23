import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searcher = ({ setInputUser }) => {

	const [valueInput, setValueInput] = useState("");

	const handleSubmit = () => {
		setInputUser(valueInput);
	}

	const onSearchValueChange = (event) => {
		setValueInput(event.target.value);
	}

	return (
		<Stack direction='row' sx={{
			marginTop: '30px',
			width: '80%',
			position: 'relative',
		}}>
			<TextField
				id="outlined-basic"
				label='Github username'
				placeholder="Search github username"
				variant='outlined'
				size='small'
				value={ valueInput }
				onChange={ onSearchValueChange }
				sx={{
					width: '100%',
				}}
			/>
			<IconButton
				onClick={ handleSubmit }
				size='small'
				sx={{
					position: 'absolute',
					right: '6px',
					top: '3px',
					height: '34px',
					width: '34px',
					verticalAlign: 'middle',
				}}
			>
				<Search />
			</IconButton>
		</Stack>
	);
};

export default Searcher;
