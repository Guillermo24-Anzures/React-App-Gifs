import React from 'react'
/* import { getGifs } from '../helpers/getGifs'; */
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {

  const {data: imagenes,loading} = useFetchGifs(categoria);

 /*  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( categoria )}&limit=10&api_key=yj5r3IYG29Pg3bB4KdAaPvHkFfnMg2ns`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
      return { 
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url

      }
    })

    console.log(gifs);
    setImagenes(gifs)
  }


 */
  
  return (
    <>
    <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
    {loading && <p className='animate__animated animate__flash'>loading</p> }
  
  {   <div className='card-grid'>
      {
        imagenes.map( img => (
        <GifGridItem key={img.id} {...img}/>
        ))
      }
    </div>}
    </>
  )
}
