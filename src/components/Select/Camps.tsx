import React, { useContext, useEffect } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useFetch } from "./../../hooks";
import { AppContext } from "../../store";

const CampsList: React.FC = () => {
	// Get list of camps
	const { data, error } = useFetch();
	const { camps } = data;

	// Fetch camps based on current selected country
	const { currentCamp, updateCamp } = useContext(AppContext);
	// Set selected camp
	const handleChange = (event: SelectChangeEvent) => {
		updateCamp(event.target.value, true);
	};

	useEffect(() => {
		console.log(camps);
	}, []);

	return (
		<>
			{!camps || error ? (
				<div>Loading</div>
			) : (
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Select Camp
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={currentCamp}
						label="Camp"
						onChange={handleChange}
					>
						<MenuItem value={""}>Select Camp</MenuItem>
						{camps.length ? (
							camps.map((item: any) => (
								<MenuItem key={item.id} value={item.camp}>
									{item.camp}
								</MenuItem>
							))
						) : (
							<MenuItem></MenuItem>
						)}
					</Select>
				</FormControl>
			)}
		</>
	);
};

export default CampsList;
