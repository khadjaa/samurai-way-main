import React from 'react';
import sp from '../../assets/sp.svg'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.size}>
            <img src={sp} alt="loader"/>
        </div>
    );
};

