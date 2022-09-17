export const initialState = {
	selectedCountry: "Egypt",
	selectedCamp: "",
	selectedSchool: "",
	updateSchool: (school: string, basedOnCamp: boolean) => {},
	updateCamp: (camp: string, basedOnCountry: boolean) => {},
	updateCountry: (updateCountry: string) => {},
};

export type ChartType = typeof initialState;

const appReducer = (state: ChartType, action: any): any => {
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_COUNTRY":
			return {
				...state,
				selectedCountry: payload.country,
			};
			break;
		case "UPDATE_CAMP":
			return {
				...state,
				selectedCamp: payload.camp,
			};
			break;
		case "UPDATE_SCHOOL":
			return {
				...state,
				selectedSchool: payload.school,
			};
			break;
		default:
			throw new Error(`${type} is not a valid reducer type`);
	}
};

export default appReducer;
