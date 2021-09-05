import styles from "./Images_Container.module.css";
import React, { useContext, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

function Images_Container(props) {
    let {source,index}=props;

   
    const [value, setValue] = React.useState(2);
    console.log(props);
    useEffect(()=>{
      const data=source.vote_average/2;
      setValue(data)
    },[value])

    return (

        
            <div  className={styles.Images_Container_mainImageContainer}>
         <img src={`https://image.tmdb.org/t/p/w500/${source.backdrop_path}`} key={index}  className={styles.Images_Container_image}></img>
            <div className={styles.Images_Container_movieTitle}>
                {source.name||source.title}
            </div>
            <div>
                <Rating  name="simple-controlled" className={styles.Images_Container_ratings}
          value={value}></Rating>
   
            </div>
         </div>
    )
}

export default Images_Container
