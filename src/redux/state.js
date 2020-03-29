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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText ='';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};


export default store;
window.store = store;