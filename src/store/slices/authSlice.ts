import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, type User } from '../../data/mockApi';

interface AuthState {
    user: User | null;
    role: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (email: string, { rejectWithValue }) => {
        try {
            const user = await api.login(email);
            return user;
        } catch (error) {
            return rejectWithValue("Login failed. Please check your credentials.");
        }
    }
);

const storedRole = localStorage.getItem("role");
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const storedEmail = localStorage.getItem("rememberedEmail");

const initialState: AuthState = {
    user: storedEmail ? { email: storedEmail } : null,
    role: storedRole,
    isAuthenticated: isLoggedIn,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = null;
            state.loading = false;
            state.error = null;

            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("role");
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.role = action.payload.role || 'admin';

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", state.role);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'An error occurred';
            });
    }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
