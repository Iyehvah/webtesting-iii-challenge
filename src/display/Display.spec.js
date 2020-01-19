import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";
// Test away!

describe("testing display", () => {
    // it("if the prop is closed displaying true", () => {
    //     const { getByText } = render(<Display closed={true} />)
    //     getByText(/closed/i)
    // })
    // it("if the closed prop is open display false" , () => {
    //     const { getByText } = render(<Display closed={false} />)
    //     getByText(/open/i);
    // });
    // it("if the prop is locked displays red-led", () => {
    //     const { getByText } = render(<Display locked={true} />)
    //     const locked = getByText(/locked/i)
    //     expect(locked.classList).toContain("red-led")
    // })
    // it("if the locked prop is false display green led", () => {
    //     const { getByText } = render(<Display locked={false} />)
    //     const locked = getByText(/locked/i)
    //     expect(locked.classList).toContain("green-led")
    // })
    // it("if the unlocked prop is false display locked", () => {
    //     const { getByText } = render(<Display unlocked={false} />)
    //     getByText(/locked/i)
    // })
    it(" if the locked prop is false display unlocked", () => {
        const { getByText } = render(<Display locked={false} />)
        getByText(/unlocked/i)
    })
})