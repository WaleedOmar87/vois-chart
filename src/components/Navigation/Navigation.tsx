import React from "react";
import { Grid } from "@mui/material";
import { SchoolsList, CampsList, CountriesList } from "./../";

const Navigation: React.FC = () => {
	return (
		<Grid
			className="section-container"
			sx={{ flexGrow: 1 }}
			container
			spacing={4}
		>
			<Grid item xs={12}>
				<h1 className="page-heading">Number of Lessons</h1>
			</Grid>
			<Grid item xs={4}>
				<CountriesList />
			</Grid>
			<Grid item xs={4}>
				<CampsList />
			</Grid>
			<Grid item xs={4}>
				<SchoolsList />
			</Grid>
		</Grid>
	);
};

export default Navigation;
