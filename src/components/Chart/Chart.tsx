import React from "react";
import { Grid } from "@mui/material";
import { LineChart } from "./../";

const Chart: React.FC = () => {
	return (
		<Grid className="section-container" container spacing={2}>
			<Grid item xs={8}>
				<h4 className="section-heading">Number Of Lessons</h4>
				<LineChart />
			</Grid>
			{/* <Grid item xs={4}>
				Chart Sidebar
			</Grid> */}
		</Grid>
	);
};

export default Chart;
