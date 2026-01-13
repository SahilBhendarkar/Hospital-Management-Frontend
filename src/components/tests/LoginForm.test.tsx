import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../auth/LoginForm";

describe("LoginForm", () => {
    test("renders email and password inputs", () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );

        expect(
            screen.getByLabelText(/email address/i)
        ).toBeInTheDocument();

        expect(
            screen.getByLabelText(/password/i, { selector: "input" })
        ).toBeInTheDocument();
    });

    test("allows user to type email and password", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );

        const emailInput = screen.getByLabelText(/email address/i);
        const passwordInput = screen.getByLabelText(/password/i, {
            selector: "input",
        });

        await user.type(emailInput, "admin@hospital.com");
        await user.type(passwordInput, "admin123");

        expect(emailInput).toHaveValue("admin@hospital.com");
        expect(passwordInput).toHaveValue("admin123");
    });

    test("submit button is present", () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("button", { name: /sign in/i })
        ).toBeInTheDocument();
    });

    test("form submit calls onSuccess callback", async () => {
        const user = userEvent.setup();
        const onSuccess = vi.fn();

        render(
            <MemoryRouter>
                <LoginForm onSuccess={onSuccess} />
            </MemoryRouter>
        );

        await user.type(
            screen.getByLabelText(/email address/i),
            "admin@hospital.com"
        );

        await user.type(
            screen.getByLabelText(/password/i, { selector: "input" }),
            "admin123"
        );

        await user.click(
            screen.getByRole("button", { name: /sign in/i })
        );

        expect(onSuccess).toHaveBeenCalledOnce();
    });
});
