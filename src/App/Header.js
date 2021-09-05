import React,{useState} from 'react'
import styles from "./Header.module.css";
import SearchIcon from '@material-ui/icons/Search';
// import { Filter } from '@material-ui/icons';


 export  default function Header(props) {
  let {filter}=props;
  const [search,setSearch]= useState("");
  const [dataValue,setData]=useState("");
  const handleSearch=(e)=>{
  setSearch(e.target.value);
  // setSearch("");
  }
  const handleSubmit=()=>{
    console.log(search);
   setData(search)
   setSearch("");
filter(dataValue);
  }
  
    return (
      <>
        <div className={styles.main_header}>
             <div className={styles.app_title_Header}>Media App</div>
             <div className={styles.searchBar_Header}>
               <SearchIcon className={styles.searchIcon_Header} onClick={handleSubmit}/>
               <input type="text" placeholder="Search Movie"className={styles.input_Header} value={search} onChange={handleSearch}></input>
          </div>
        </div>
        
   
       
        </>
    )
}


