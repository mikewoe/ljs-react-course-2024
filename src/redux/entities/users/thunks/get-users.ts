import {createAsyncThunk} from "@reduxjs/toolkit";
import {TNUser} from "../../../../types/types.ts";
import {TState} from "../../../index.ts";
import {userSlice} from "../index.ts";

// @ts-ignore
export const getUsers = createAsyncThunk<TNUser[], void, {state: TState}>(
    'users/getUsers',
    async () => {
        const response = await fetch('http://localhost:3001/api/users');

        return await response.json();
    },
    {
        condition: (_, {getState}) => !userSlice.selectors.selectAll(getState())?.length
    }
);