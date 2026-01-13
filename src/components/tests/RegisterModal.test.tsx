import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import RegisterModal from "../../modals/RegisterModal";

describe("RegisterModal", () => {
    test("modal is visible when isOpen is true", () => {
        render(
            <MemoryRouter>
                <RegisterModal isOpen={true} onClose={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("dialog", { name: /create account/i })
        ).toBeInTheDocument();
    });

    test("modal is not visible when isOpen is false", () => {
        render(
            <MemoryRouter>
                <RegisterModal isOpen={false} onClose={vi.fn()} />
            </MemoryRouter>
        );

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    test("modal closes when close button is clicked", async () => {
        const user = userEvent.setup();
        const handleClose = vi.fn();

        render(
            <MemoryRouter>
                <RegisterModal isOpen={true} onClose={handleClose} />
            </MemoryRouter>
        );

        await user.click(
            screen.getByLabelText(/close register modal/i)
        );

        expect(handleClose).toHaveBeenCalledOnce();
    });
});
