import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Home } from "./../pages";
import { default as testData } from "./../data/testData";
import { AppProvider } from "./../store";
import "mutationobserver-shim";

describe("Loading Main Component", () => {
	// Mock API data and render the main component
	test("Mock fetch API, and render main component", async () => {
		// Mock data coming from the API
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({ json: async () => testData });
		act(() => {
			render(
				<AppProvider
					value={{ loading: false, selectedCountry: "Egypt" }}
				>
					<Home />
				</AppProvider>
			);
		});
		const getAppBar = await screen.findByTestId("app-bar-title");
		expect(getAppBar).toBeInTheDocument();
	});
});
