import React from 'react';
import { useTelegram } from '../../hooks/telegram';
import '/Header.css';

const Header = (props) => {
   const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;