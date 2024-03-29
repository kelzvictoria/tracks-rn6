import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_current_location':
            return {
                ...state,
                currentLocation: action.payload,     
            }
        case 'add_location':
            return {
                ...state,
                locations: [...state.locations, action.payload] 
            }
        case 'change_track_name':
            return {
                ...state,
                trackName: action.payload,     
            }
        case 'start_recording':
            //console.log('started');
            return {
                ...state,
                recording: true
            }
        case 'stop_recording':
            //console.log('stopped');
            return {
                ...state,
                recording: false
            }
        case 'reset':
            return {
                ...state,
                trackName: "",
                locations: []
            }
        default:
            return state
    }
}

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' })
};

const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' })
};

const addLocation = dispatch => (location, recording) => {
    dispatch({
        type: 'add_current_location',
        payload: location
    })

    if (recording) {
        dispatch({
            type: 'add_location',
            payload: location
        })
    }
};

const changeTrackName = dispatch => name => {
    dispatch({
        type: 'change_track_name',
        payload: name
    })
}

const reset = dispatch => () => {
    dispatch({
        type: 'reset'
    })
}

export const { Context, Provider } = createDataContext( 
    locationReducer,
    { 
        startRecording, 
        stopRecording, 
        addLocation, 
        changeTrackName,
        reset 
    },
    { 
        recording: false,
        locations: [],
        currentLocation: null,
        trackName: ""
    }
)