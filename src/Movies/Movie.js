import React from 'react';
import Header from "./Header";

import Sidebar from './Sidebar';

import styles from "./MoviesContainer.module.css";
 
import MoviesContainer from "./MoviesContainer";
//  import {AuthContext} from "./Header";

function Movies() {
    return (
        <>
      <Header></Header>
      <div className={styles.mainMovie_Container}>
     
      <Sidebar></Sidebar>
        <MoviesContainer></MoviesContainer>

   </div>
      </>
    )
}

export default Movies
