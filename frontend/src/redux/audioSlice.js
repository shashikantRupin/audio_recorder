import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const AddAudio = createAsyncThunk('audio/AddAudio', async (audio) => {
    try {
        const res = await axios.post('http://localhost:5001/api/audio', audio)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})


export const GetAudio = createAsyncThunk('audio/getAudios', async (audio) => {
    try {
        const response = await axios.get('http://localhost:5001/api/audio', audio)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})


const AudioSlice = createSlice({
    name: 'audio',
    initialState: {
        audios: [],
        loading: false,
        isSuccess: false,
    },
    reducers: {
        reset: (state) => {
            state.loading = false
            state.isSuccess = false
            state.audios = null
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(AddAudio.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(AddAudio.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.audios.push(action.payload)
            })
            .addCase(AddAudio.rejected, (state) => {
                state.isSuccess = false
            })

            // Get Audios
            .addCase(GetAudio.pending, (state) => {
                state.loading = true
                state.isSuccess = false
            })
            .addCase(GetAudio.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.audios = action.payload
            })
            .addCase(GetAudio.rejected, (state) => {
                state.isSuccess = false
            })
    }
})


export const { reset } = AudioSlice.actions;
export default AudioSlice.reducer
