import { useState } from "react";

const Categoryfilter = ({products}) => {
  const [searchData, setSearchData] = useState("");

  const handleSearchImage = () => {

  }

  const filteredData = products.filter(
    (data) => data.category === searchData.toLowerCase()
  ) 

  return(
    <>
    
    </>
  )
};

export default Categoryfilter;
