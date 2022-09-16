import React, { useMemo, useContext } from "react";
import { Grid, CssBaseline, PaletteMode } from "@mui/material";
import { Header, Navigation, Chart } from "./../../components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeContext, AppProvider } from "../../store";
import "./../../assets/css/App.css";

/* Home Page Container */
const Home: React.FC = () => {
	// Get current theme mode
	const { themeMode } = useContext(themeContext);
	const theme = useMemo(() => {
		return createTheme({
			palette: {
				mode: themeMode as PaletteMode,
			},
		});
	}, [themeMode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppProvider>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Header />
					</Grid>
					<Grid item xs={12}>
						<Navigation />
					</Grid>
					<Grid item xs={12}>
						<Chart />
					</Grid>
				</Grid>
			</AppProvider>
		</ThemeProvider>
	);
};

export default Home;
