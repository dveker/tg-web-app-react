import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/telegram"

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        }
        tg.sendData(JSON.stringify(data));
    }, [])

    useEffect( () => {
        tg.onEvent('mainByttonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [])

    useEffect( () => {
       tg.MainButton.setParams({
        text: "send Data"
       })
    }, [])

    useEffect( () => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])

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