import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Nazarii'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Tomas'},
        {id: 4, name: 'Jon'}

    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it going'},
        {id: 3, message: '???'},
        {id: 4, message: 'Yo...'}
    ];

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let mesagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {mesagesElements}
            </div>
        </div>
    )
};

export default Dialogs;