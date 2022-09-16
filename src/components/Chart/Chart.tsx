import React from "react";
import { Grid } from "@mui/material";

const Chart: React.FC = () => {
	return (
		<Grid className="section-container" container spacing={2}>
			<Grid item xs={8}>
				Chart Section
			</Grid>
			<Grid item xs={4}>
				Chart Sidebar
			</Grid>
		</Grid>
	);
};

export default Chart;
