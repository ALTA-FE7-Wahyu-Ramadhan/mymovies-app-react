import React, { useState,useEffect } from 'react'
import { WithRouter } from '../utils/Navigation'
import axios from 'axios';
import Header from '../components/Header';

const DetailMovie =(props)=> {

  const [detailMovie, setDetailMovie]=useState({});
  const [loading, setLoading]=useState(false);

  useEffect(()=> {
    fetchData();
  },[]);

    const fetchData = async (props)=>{
      setLoading(true);
      const {movie_id} = props.params;
        await axios
        .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`)
        .then((response) => {
            const {data}=response;
            setDetailMovie(data);
        })
        .catch((error) => {
            alert(error.toString());
        })
        .finally(() => setLoading(false));
    }
    
  
    if (loading){
      return(<div>Loading...</div>)
    }
    return (<div>
      <Header />
      <p>{detailMovie.title}</p>
      </div>
      );
  }


export default WithRouter(DetailMovie);
