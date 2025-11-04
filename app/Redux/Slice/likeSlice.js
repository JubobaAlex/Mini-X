const { createSlice } = require("@reduxjs/toolkit");

const likeslice = createSlice({
    name: 'like',
    initialState: {
        likesData: {}
    },
    reducers: {
         addLike: (state, action) => {  
            const tweetId = action.payload;
            
            if(state.likesData[tweetId]) {
                return
            } else {
                state.likesData[tweetId] = 1;
            }
         }
    }
});

export const { addLike } = likeslice.actions;
export default likeslice.reducer;