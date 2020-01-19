import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";
import { toBeDisabled } from "@testing-library/jest-dom";

expect.extend({ toBeDisabled });

// Test away!

describe("testing controls", () => {
    it("controls is rendering properly", () => {
        render(<Controls />)
    })
    it("buttons have options to toggle closed/locked states", () => {
        const { getByText } = render(<Controls />)
        const lockGate = getByText(/lock gate/i);
        const closeGate = getByText(/close gate/i);
        expect(lockGate).toBe(lockGate)
        expect(closeGate).toBe(closeGate)
    })
    describe("buttons' text changes to reflect the state the door will be in if clicked", () => {
        it("if closed gate button displays `open gate`", () => {
            const { getByText } = render(<Controls closed={true} />)
            const button = getByText(/open gate/i)
            expect(button).toBe(button)
        })
        it("if open gate button displays `close gate`", () => {
            const { getByText } = render(<Controls closed={false} />)
            const button = getByText(/close gate/i)
            expect(button).toBe(button)
        })
    })
    it("the closed toggle button is disabled if the gate is locked", () => {
        const { getByText } = render(<Controls locked={true} />)
        const button = getByText(/close gate/i)

        expect(button).toBeDisabled();
    })
    it("the locked toggle button is disabled if the gate is open", () => {
        const { getByText } = render(<Controls open={true} />)
        const button = getByText(/lock gate/i)

        expect(button).toBeDisabled();
    })
})