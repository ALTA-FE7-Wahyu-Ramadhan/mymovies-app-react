import React from 'react'
import {Link} from 'react-router-dom';

import Button from './Button';
import { WithRouter } from '../utils/Navigation';

// const Card =(props)=> {
  //konsep destructuring
const Card =({data, navigate})=> {
    return (
      <div className='flex flex-col justify-between p3 bg-nautral-500 dark:bg-zinc-800 rounded shadow-lg shadow-black'>
        <Link to={`/detail/${data.id}`}>
        <img src={data.poster_path ?`https://image.tmdb.org/t/p/w500/${data.poster_path}`:'https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image' } alt={data.title} height='750' />
        <p className='text-center text-white font-bold'>{data.title}</p>
        </Link>
        <Button label='Add to Favorite' onClick={()=> navigate(`/detail/${data.id}`)}/>
      </div>
    )
  }


/*
ada 2 macam export:
1. export default: berarti gak usah ditulis lagi export di bawahnya
2. named export: di bagian atas di tulis dengan bentuk
  class Card extends Component {

  dan bagian bawah baru di ekspor
  export { Card, Card2 };
*/

export default WithRouter(Card);