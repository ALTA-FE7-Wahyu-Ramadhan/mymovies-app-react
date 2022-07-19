import React, { Component } from 'react'
import Card from '../components/Card'
import Header from '../components/Header';
import axios from 'axios';


export class HomePage extends Component {
    //ini constructor
    state = {
        title: 'Home Page',
        content: 'This is the home page',
        page: 1,
        datas: [],
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
//fetch data dengan axios harus menggunakan async await
    async fetchData() {
        this.setState({loading: true});
        //untuk key dari API harus diraasiakan dan ditaruh di file .env, pemanggilannya dilakukan dengan cara ${process.env.inisial}
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        //dikasih promise untuk memberitahu user, bahwa berjalan atau tidaknya suatu website
        .then((response) => {
            //kita lakukan destructuring untuk memanggil suatu data dari API yang diinginkan, dan digunakan sebagai response
            const {results}=response.data;
            //objek data tsb disimpan ke variabel array datas
            console.log(results)
            this.setState({datas: results});
        })
        .catch((error) => {
            alert(error.toString());
        })
        .finally(() => this.setState({loading: false}));
        /*
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((response) => {});
        })
        .catch((error) => {});
        })
        .finally(() => {});
        */
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
                    <Card key={data.id} title={data.title} image={data.poster_path} />
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
