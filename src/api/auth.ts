import api from "./axios";

export const loginApi = async (email: string, password: string) => {
    const response = await api.post("/api/login", { email, password });
    console.log("Api Called");
    return response.data;
};

