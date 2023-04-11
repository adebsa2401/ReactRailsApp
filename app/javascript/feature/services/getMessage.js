import { createAsyncThunk } from "@reduxjs/toolkit";

const getMessage = createAsyncThunk("greeting", async () => {
  try {
    const message = await fetch("http://127.0.0.1:3000/message");
    const data = await message.json();
    if (!data.message) {
      return {
        success: true,
        data,
      };
    }
    return { success: false, err: data.message };
  } catch (err) {
    return { sucess: false, err: err.response.data.message };
  }
});

export default getMessage;
