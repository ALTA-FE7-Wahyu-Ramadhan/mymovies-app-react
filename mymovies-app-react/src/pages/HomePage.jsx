import React, { Component } from 'react'
import Card from '../components/Card'
import Header from '../components/Header';


export class HomePage extends Component {
    //ini constructor
    state = {
        title: 'Home Page',
        content: 'This is the home page',
        page: 1,
        datas: [
            {
                id: 1,
                title: 'Wandavision Season 1 Wandavision Season 1 Wandavision Season 1',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
            {
                id: 2,
                title: 'Wandavision Season 2',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
            {
                id: 3,
                title: 'Wandavision Season 3',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
            {
                id: 4,
                title: 'Wandavision Season 4',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
            {
                id: 5,
                title: 'Wandavision Season 5',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
            {
                id: 6,
                title: 'Wandavision Season 6',
                image: 'https://timlo.net/wp-content/uploads/2020/10/the-batman-promo-art.jpg'
            },
        ],
        information: {},
        loading: false,
    };

    /*
    1. asynchronous, artinya dia tak bisa langsung dipakai
    2. ketika value dirubah, maka dia melakukan re-rendering
    3. selain dibaca, sebuah state bisa dirubah value-nya
    */

    //side effect: dipanggil secara lgsg setelah komponen selesai dimuat
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        setTimeout(() => {
            this.setState({
                title: 'Home Test',
            }, () => { console.log(this.state.title); });
        }, 2000);
    }

    /*
    gambaran .map dalam function
    for (let i = 0; i < this.state.datas.length; i++){
        console.log(this.state.datas[i].title);
    }
    for loop biasanya digunakan di dalam function
    sedangkan dalam komponen itu menggunakan .map
    */

    render() {
        return (
            <>
            <Header/>
            <div className='w-full h-screen'>
                <p>{this.state.title}</p>
                <div className='grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3'>
                {this.state.datas.map((data) => (
                    <Card key={data.id} title={data.title} image={data.image} />
                    ))}
                </div>
            </div>
            </>
        )
    }
}
export default HomePage;

/*
kalau di dulu kan kalau mau mengubah tinggal
let strVal = 'hello world';
strVal = 'world';

kalau di state jangan begitu, misal kita declare dlu:
state = {
    title: 'HomePage',
    content:'This is the home page',
}

maka, kita ubahnya dengan menggunakan setState:({
    title: 'Home Test',
    content: 'This is the test page',
})

jangan kita rubah dengan cera seperti ini
this.state.title = 'HomeTest';
this.state.content = 'HomeTest';


*/
