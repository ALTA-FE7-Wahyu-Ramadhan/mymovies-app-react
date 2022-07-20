import { useNavigate, useParams } from "react-router-dom";

import React from 'react'

//membuat komponen pembungkus supaya dapat mendeklarasikan 
export const WithRouter=(Component)=> {
  const Wrapper =(props)=>{
    const params = useParams();
    const navigate = useNavigate();

  return <Component {...props} navigate={navigate} params={params}/>;
};
return Wrapper;
};

