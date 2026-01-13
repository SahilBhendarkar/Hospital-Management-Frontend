import { loginApi } from "../../api/auth";
import { describe, test, expect, vi } from "vitest";

vi.mock("../../api/auth", () => ({
    loginApi: vi.fn(),
}));

describe("Task-4: API Mocking", () => {
    test("login success", async () => {
        (loginApi as any).mockResolvedValue({
            token: "fake-token",
        });

        const result = await loginApi("a@b.com", "1234");

        expect(result.token).toBe("fake-token");
    });

    test("login failure", async () => {
        (loginApi as any).mockRejectedValue(
            new Error("Invalid credentials")
        );

        await expect(
            loginApi("a@b.com", "wrong")
        ).rejects.toThrow("Invalid credentials");
    });
});
