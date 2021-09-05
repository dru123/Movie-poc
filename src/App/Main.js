import React, { useEffect, useState } from "react";
import Images_Container from "./Images_Container";
import styles from "./MoviesContainer.module.css";
import Sidebar from "./Sidebar";
function Main(props) {
  let { data, searchText } = props;
  let filterArr=data;

  const [currentPage, setCurrentPage] = useState(1);
  let limit = 4;
  const changePage = (pageNo) => {
    setCurrentPage(pageNo);
  };
  useEffect(() => {
      console.log(data.length,"///////////////////");
    let numberofPage = Math.ceil(data.length / limit);
    let si = (currentPage - 1) * limit;
    let ei = si + limit;
    console.log(si, ei);
    
    filterArr =filterArr?filterArr.slice(si, ei):null;
    console.log(filterArr);
  }, [currentPage,filterArr]);

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={styles.movies_Container}>
        <div className={styles.movies_Container_title}>New Releases</div>
        <div className={styles.Images_Container}>
          {
          filterArr.map((source, index) => {
              console.log("hi","32");
            return (
              <Images_Container source={source} id={index}></Images_Container>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
