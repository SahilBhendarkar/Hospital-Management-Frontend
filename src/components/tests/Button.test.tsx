import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Button from "../common/Button";

describe("Button Component", () => {
    test("Button Rendered", () => {
        render(<Button label="Submit" />);
        const button = screen.getByRole("button", { name: /submit/i });
        console.log("Button Rendered")
        expect(button).toBeInTheDocument();
    });

    test("When Clicked on the button onClick function is called", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button label="Submit" onClick={handleClick} />);

        const button = screen.getByRole("button", { name: /submit/i });
        await user.click(button);
        console.log("Button Clicked")
        expect(handleClick).toHaveBeenCalledOnce();
    });

    test("The Buton which is disabled does not work onClick", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Button label="Submit" onClick={handleClick} disabled />
        );

        const button = screen.getByRole("button", { name: /submit/i });
        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });
});
