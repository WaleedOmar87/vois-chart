import React, { useCallback, useContext, useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useFetch } from "../../hooks";
import { AppContext } from "./../../store";
import { filterDataByCountry } from "./../../helpers";

// Register Chart Types
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// Line chart component
const LineChart: React.FC = () => {
	// Get list of data, current country school and camp
	const { data, error } = useFetch();
	const { selectedCountry, selectedCamp, selectedSchool } = useContext(
		AppContext
	);
	const [chartData, setChartData] = useState<any>({
		labels: [
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
		],
		datasets: [],
	});

	// Update filtered chart data based on county, camp or school change
	useEffect(() => {
		const getData = Object.keys(data).length
			? filterDataByCountry(data.allData, selectedCountry)
			: [];
		setChartData({ ...chartData, datasets: getData });
	}, [selectedCountry]);

	return (
		<>
			{error || data.length < 1 ? (
				<span>Error loading chart data</span>
			) : (
				<Line
					data={chartData}
					options={{
						plugins: {
							title: {
								display: true,
								text: "Lessons",
							},
							legend: {
								display: true,
								position: "top",
							},
						},
					}}
				/>
			)}
		</>
	);
};
export default LineChart;
