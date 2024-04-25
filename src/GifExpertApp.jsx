import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //aqui info que luego cambia en el html 
    const [ categories, setCategories ] = useState( ['Taekwondo']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory)) return; //si la nueva categoria  ya esta, retorne
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ event => onAddCategory(event) } // on - emite el evento / onNewCategory es una propiedad, emite el nuevo valor
            />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category} />
                ))
            }

        </>
    )
}