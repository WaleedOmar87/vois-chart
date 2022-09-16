import React, { useContext } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import { themeContext } from "../../store";

const Header: React.FC = () => {
	const { themeMode, setThemeMode } = useContext(themeContext);
	const handleChange = (event: any) => {
		setThemeMode(event.target.checked ? "dark" : "light");
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
