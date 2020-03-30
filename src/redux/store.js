import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
        },
        sidebar: {}

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

export default store;
window.store = store;