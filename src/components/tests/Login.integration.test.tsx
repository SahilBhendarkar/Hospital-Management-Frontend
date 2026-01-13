import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "../../pages/auth/Login";
import * as authApi from "../../api/auth";

vi.mock("../../api/auth", () => ({
    loginApi: vi.fn(),
}));

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual<any>("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("Login Integration Test", () => {
    test("user logs in and navigates to dashboard", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Login />
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

        expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });

});
