import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) //un AND logico!
            }
        
            <div className="card-grid"> 
                {
                    images.map( ( image ) => (
                     <GifItem 
                        key={image.id}
                        { ...image } //asi traigo todas las propiedades
                    />
                    ))
                }
            </div>
        </>
    )
}

// dentro del map: 
// title={ image.title }
// url={ image.url} />

//un if puede ser asi :
// isLoading
// ? ( <h2>Cargando...</h2> )
// : null