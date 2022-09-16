export const initialState = {
	currentCountry: "Egypt",
	currentCamp: "",
	currentSchool: "",
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
				currentCountry: payload.country,
			};
			break;
		case "UPDATE_CAMP":
			return {
				...state,
				currentCamp: payload.camp,
			};
			break;
		case "UPDATE_SCHOOL":
			return {
				...state,
				currentSchool: payload.school,
			};
			break;
		default:
			throw new Error(`${type} is not a valid reducer type`);
	}
};

export default appReducer;
