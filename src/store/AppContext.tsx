import React, { createContext, useReducer } from "react";
import { default as appReducer, initialState, ChartType } from "./appReducer";
export const AppContext = createContext(initialState);
const AppProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const updateCountry = (country: string) => {
		dispatch({
			type: "UPDATE_COUNTRY",
			payload: {
				...state,
				country: country,
			},
		});
	};
	const updateCamp = (camp: string) => {
		dispatch({
			type: "UPDATE_CAMP",
			payload: {
				...state,
				camp: camp,
			},
		});
	};
	const updateSchool = (school: string) => {
		dispatch({
			type: "UPDATE_SCHOOL",
			payload: {
				...state,
				school: school,
			},
		});
	};

	return (
		<AppContext.Provider
			value={
				{
					selectedCountry: state.selectedCountry,
					selectedSchool: state.selectedSchool,
					selectedCamp: state.selectedCamp,
					updateSchool: updateSchool,
					updateCamp: updateCamp,
					updateCountry: updateCountry
				} as any
			}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
