const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store ={
    _state: {
        profilePage: {
            posts:[
                {id: 1, message: 'Hi, how are you', like: 12},
                {id: 2, message: 'Its my first post', like: 15},
                {id: 3, message: 'Its my first post', like: 15},
                {id: 4, message: 'Its  post', like: 15},
                {id: 5, message: 'Its my ', like: 15},
                {id: 6, message: 'Its my post', like: 15}
            ],
            newPostText: 'Zendik'
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Nazarii'},
                {id: 2, name: 'Roman'},
                {id: 3, name: 'Tomas'},
                {id: 4, name: 'Jon'}
            ],
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is it going'},
                {id: 3, message: '???'},
                {id: 4, message: 'Yo...'}
            ],
            newMessageBody: ''
        }

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
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

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body:body
    };
};

export default store;
window.store = store;