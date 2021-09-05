import Main from "./App/Main";
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./App/Header";
import axios from 'axios';
function App() {
  const [data,setData]= useState([]);
  const [searchText,setText]=useState("");
  useEffect(async()=>{
      const reponse= await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=bf1a73cbe847fa8bd995cc75bedcad94");
      console.log(reponse.data.results);
      setData(reponse.data.results);
  },[]);

   const filter=(text)=>{
     console.log(text);
     let filterArr=data;
     setText(text);
     let newArray=filterArr.filter((obj)=>{
       let title=obj.name||obj.title;
       title=title.trim().toLowerCase();
  return   title.includes(text.toLowerCase());
 
  
     })
     setData(newArray);
   }
  return (
    <div className="App">
      <Header filter={filter}> </Header>
        <Main data={data} searchText={searchText}></Main>
    </div>
  );
}

export default App;
