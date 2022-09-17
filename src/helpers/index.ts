export const generateColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Remove duplicated based on object key
export const removeDuplicates = (data: any, key: string) => {
	const updatedData = new Map(
		data.map((item: any) => [item[key], item])
	).values();
	return [...(updatedData as any)];
};

// Group schools by month
export const groupSchoolsByMonth = (schools: any): [] => {
	const months = [
		"Jan",
		"Feb",
		"March",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const updatedData: any = [];

	// loop through data, and create an entry with school as a label
	schools.forEach((entry: any) => {
		// Accent color
		let accentColorList = Array(2).fill(generateColor());

		// Filter school data per months
		const schoolMonthsData = Array.from(Array(12).fill(0));
		let monthIndex = months.indexOf(entry.month);
		schoolMonthsData[monthIndex] = entry.lessons;
		updatedData.push({
			label: entry.school,
			data: schoolMonthsData,
			backgroundColor: accentColorList,
			borderWidth: 1,
			borderColor: accentColorList[0],
		});
	});

	return updatedData;
};
// Filter data based on country
export const filterDataByCountry = (data: [], country: string): object => {
	const getAllSchools = data.filter(
		(record: any) => record.country === country
	);
	const filterSchools = removeDuplicates(getAllSchools, "school");
	return groupSchoolsByMonth(filterSchools);
};
