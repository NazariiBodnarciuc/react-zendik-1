const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id: 1, message: 'Hi, how are you', like: 12},
        {id: 2, message: 'Its my first post', like: 15},
        {id: 3, message: 'Its my first post', like: 15},
        {id: 4, message: 'Its  post', like: 15},
        {id: 5, message: 'Its my ', like: 15},
        {id: 6, message: 'Its my post', like: 15}
    ],
    newPostText: 'Zendik'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText ='';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    };
};

export default profileReducer;