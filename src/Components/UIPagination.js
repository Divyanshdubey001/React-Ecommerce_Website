// import * as React from "react";
// import "../Styles/pagination.css";
// import { useState } from "react";

// export default function BasicPagination({ products }) {

//   const recordsPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentRecords, setCurrentRecords] = useState("");
//   const [nPages, setnPages] = useState("");
//   const indexofLastRecord = currentPage * recordsPerPage;
//   const indexofFirstRecords = indexofLastRecord - recordsPerPage;

//   React.useEffect(() => {
//     if (products) {
//       setCurrentRecords(products.slice(indexofLastRecord, indexofFirstRecords));
//       setnPages(Math.ceil(products.length / recordsPerPage));
//     }
//   }, []);

//   //Holding page from 1 to n
//   const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

//   console.log(currentPage, currentRecords, nPages, indexofLastRecord, indexofFirstRecords, pageNumbers);

//   const nextPage = () => {
//     if (currentPage !== nPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <nav>
//         <ul className="page-container">
//           <li className="page-wrapper">
//             <a className="page-link" href="#page" onClick={prevPage}>
//               Previous
//             </a>
//           </li>

//           {pageNumbers?.map((pgNumber) => {
//             return (
//               <li
//                 key={pgNumber}
//                 className={`page-item ${
//                   currentPage === pgNumber ? "active" : ""
//                 }`}
//               >
//                 <a
//                   onClick={() => setCurrentPage(pgNumber)}
//                   className="page-link"
//                   href="default"
//                 >
//                   {pgNumber}
//                 </a>
//               </li>
//             );
//           })}
//           <li className="page-item">
//             <a className="page-link" onClick={nextPage} href="nextpage">
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div>
//         {currentRecords.map((record) => (
//           <div key={record.id}>{record.name}</div>
//         ))}
//       </div>
//     </>
//   );
// }

import * as React from "react";
import "../Styles/pagination.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=22")
      .then((response) => response.json())
      .then((data) => setData(data.products));
  }, []);
  console.log(data);

  const recordsPerPage = 10;
  const indexofLastRecord = currentPage * recordsPerPage;
  console.log("indexofLastRecord", indexofLastRecord);
  const indexofFirstRecords = indexofLastRecord - recordsPerPage;
  console.log("indexofFirstRecords", indexofFirstRecords);

  const currentRecords = data.slice(indexofFirstRecords, indexofLastRecord);
  console.log("currentRecords", currentRecords);

  const nPages = Math.ceil(data.length / recordsPerPage);
  console.log("npages", nPages);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  console.log("pageNumbers", pageNumbers);

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
      console.log("Next Page trigerred");
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      console.log("Prev Page trigerred");
    }
  };

  return (
    <>
      <nav>
        <ul className="page-container">
          <li className="page-wrapper">
            <a className="page-link" href="#prevpage" onClick={prevPage}>
              Previous
            </a>
          </li>

          {pageNumbers.map((pgNumber) => {
            console.log("pgNumber", pgNumber);
            return (
              <li
                key={pgNumber}
                className={`page-item ${
                  currentPage === pgNumber ? "active" : ""
                }`}
              >
                
                
                <a
                  onClick={() => setCurrentPage(pgNumber)}
                  className="page-link"
                  href="pgnumber"
                >
                  {pgNumber}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className="page-link" onClick={nextPage} href="nextpage">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div>
        {currentRecords.map((record) => (
          <div key={record.id}>{record.name}</div>
        ))}
      </div>
    </>
  );
}