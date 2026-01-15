import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, type Appointment, type Stat } from '../../data/mockApi';

interface DashboardState {
    appointments: Appointment[];
    stats: Stat[];
    loading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    appointments: [],
    stats: [],
    loading: false,
    error: null,
};

export const fetchDashboard = createAsyncThunk(
    'dashboard/fetchDashboard',
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.fetchDashboardData();
            return data;
        } catch (error) {
            return rejectWithValue("Failed to fetch dashboard data.");
        }
    }
);

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboard.fulfilled, (state, action) => {
                state.loading = false;
                state.appointments = action.payload.appointments;
                state.stats = action.payload.stats;
            })
            .addCase(fetchDashboard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'An error occurred';
            });
    }
});

export default dashboardSlice.reducer;
