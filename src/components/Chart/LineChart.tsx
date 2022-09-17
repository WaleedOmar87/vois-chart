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
	const { currentCountry, currentSchool, currentCamp } = useContext(
		AppContext
	);
	const [filteredData, setFilteredData] = useState<any>({});

	// Update filtered chart data based on county, camp or school change
	useEffect(() => {
		console.log(data);
		const getData = Object.keys(data).length
			? filterDataByCountry(data.allData, currentCountry)
			: [];
		setFilteredData(getData);
	}, [currentCountry]);

	// Const chart style
	const getChartStyle = (index: number): object => {
		return {
			backgroundColor: ["red", "green"],
			borderWidth: 1,
			borderColor: "red",
		};
	};

	// Chart labels
	const chartLabels = [
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

	// All chart data
	const chartData = {
		labels: chartLabels,
		datasets: filteredData,
	};

	return (
		<>
			{error || !data.length ? (
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
