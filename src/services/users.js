import { urlFetch } from "../constants";

export const getGithubUser = async (user) => {
	const response = await fetch(`${ urlFetch }${ user }`);
	return await response.json();
}