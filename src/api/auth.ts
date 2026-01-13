export const loginApi = async (email: string, password: string) => {
    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
    console.log("Api Called")
    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};
