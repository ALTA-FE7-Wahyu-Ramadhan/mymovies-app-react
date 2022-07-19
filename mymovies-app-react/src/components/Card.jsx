import React, { Component } from 'react'
import Button from './Button'

export class Card extends Component {
  render() {
    console.log(this.props.title)
    return (
      <div className='flex flex-col justify-between p3 bg-zinc-500 rounded shadow-lg shadow-black'>
        <img src={this.props.image} alt={this.props.title} height='750' />
        <p className='text-center text-white font-bold'>{this.props.title}</p>
        <Button label='Add to Favorite'/>
      </div>
    )
  }
}

/*
ada 2 macam export:
1. export default: berarti gak usah ditulis lagi export di bawahnya
2. named export: di bagian atas di tulis dengan bentuk
  class Card extends Component {

  dan bagian bawah baru di ekspor
  export { Card, Card2 };
*/

export default Card