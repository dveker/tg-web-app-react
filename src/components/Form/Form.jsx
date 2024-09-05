import { useEffect, useState } from 'react';
import React from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/telegram"

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect( () => {
       tg.MainButton.setParams({
        text: "send Data"
       })
    }, [])

    useEffect( () => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h2>Provide information about yourself</h2>
            <input
                className={'input'} 
                type={'text'} 
                placeholder={'Country'}
                value={country}
                onChange={onChangeCountry}
                />
            <input 
                className={'input'} 
                type={'text'} 
                placeholder={'Street'}
                value={city}
                onChange={onChangeCity}
                
                />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physcal'}>Personal Use</option>
                <option value={'legal'}>buisness</option>
            </select>
            
        </div>
    );
};

export default Form;