import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory(inputValue.trim())
        //setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Buscar Gifts"
            value= {inputValue}
            onChange={ onInputChanged }
            />
        </form>
    )
}