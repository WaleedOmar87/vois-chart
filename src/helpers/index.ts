// Remove duplicated based on object key
export const removeDuplicates = (data: any, key: string) => {
	const updatedData = new Map(
		data.map((item: any) => [item[key], item])
	).values();
	return updatedData;
};

// Filter data based on country
export const filterDataByCountry = (data: [], country: string): object => {
		const getAllSchools = data.filter(
		(record: any) => record.country === country
	);
	return removeDuplicates(getAllSchools, "school");
};
