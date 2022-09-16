import React, { useCallback, useContext, useEffect, useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useFetch } from "./../../hooks";
import { AppContext } from "../../store";

const CountriesList: React.FC = () => {
	// Fetch Countries List
	const { data, error } = useFetch();
	const { countries } = data;

	// Set selected country
	const { currentCountry, updateCountry } = useContext(AppContext);

	// Update current country when select changes
	const handleChange = (event: SelectChangeEvent) => {
		updateCountry(event.target.value as string);
	};

	return (
		<>
			{!countries || error ? (
				<div>Loading</div>
			) : (
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Select Country
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={currentCountry}
						label="Country"
						onChange={handleChange}
					>
						<MenuItem>Select Country</MenuItem>
						{countries.length ? (
							countries.map((item: any) => (
								<MenuItem key={item.id} value={item.country}>
									{item.country}
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

export default CountriesList;
