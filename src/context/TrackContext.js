import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tracks':
            return action.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get("/tracks")
    //console.log(response.data);
    dispatch({
        type: 'fetch_tracks',
        payload: response.data
    })
};
const createTrack = dispatch => async (name, locations) => {
    const response = await trackerApi.post("/tracks", {name, locations})
    //console.log(response.data);
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    {}
)