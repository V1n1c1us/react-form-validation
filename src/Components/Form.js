import React, {useState}from 'react';
import * as yup from 'yup';

import {
    Button,
    FormData
} from './StyleComponents';

function DevForm() {

    const [errors, setErros] = useState('');
    const [user, setUsers] = useState([]);

    let schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.number().min(2, 'Phone number > 2')
    })

    
    function handleCheckValidation(value, phone) {
        schema.validate({
            name: value,
            phone: phone
        })
        .then(() => {
            console.log("ok")
        })
        .catch(function(err){
            setErros({
                nameMessageError: err.message,
                phoneMessageError: err.message
            })
            console.log(err.message);
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        const value = e.target.name.value;
        const phone = e.target.phone.value;

        handleCheckValidation(value,phone);

        setUsers(value,phone);
        setErros('');
    }

    const { nameMessageError, phoneMessageError } = errors;
    
    return (
        <FormData
            onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={user.name}
                />
                {nameMessageError &&(
                    <span>{nameMessageError}</span>
                )}
            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={user.phone}
                />
                {phoneMessageError &&(
                    <span>{phoneMessageError}</span>
                )}
            </div>
            <Button
                type="submit"
                colorTheme
                data-clipboard-text="aaaa">
            Send
            </Button>
            <Button>Opa</Button>
        </FormData>
    );
}

export default DevForm;