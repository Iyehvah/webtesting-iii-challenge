import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Test away
describe("Dashboard", () => {
    it("Dashboard renders", () => {
        const wrapper = render(<Dashboard/>);
        expect(wrapper).toMatchSnapshot();
    });
});