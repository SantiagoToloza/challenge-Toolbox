const initialState = {
    data: [],
    loading: false,
    fileName: '',
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_FILE_NAME':
            return { ...state, fileName: action.payload };
        default:
            return state;
    }
}

export default rootReducer;