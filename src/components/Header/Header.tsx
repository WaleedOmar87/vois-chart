import React, { useContext, useEffect } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import { AppContext } from "../../store";

const Header: React.FC = () => {
	const { themeMode, updateTheme } = useContext(AppContext);
	const handleChange = (event: any) => {
		updateTheme(event.target.checked ? "dark" : "light");
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Dashboard
					</Typography>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									defaultChecked
									onChange={handleChange}
									aria-label="login switch"
								/>
							}
							label={themeMode == "dark" ? "Dark" : "Light"}
						/>
					</FormGroup>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
