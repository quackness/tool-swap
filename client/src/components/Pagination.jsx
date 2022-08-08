import { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination(props) {
  const { toolsPerPage, totalTools, paginate } = props;

  // const [tools, setTools] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [toolsPerPage, setToolsPerPage] = useState(5);

  // useEffect(() => {
  //   const fetchTools = async () => {
  //     const res = await axios.get(`http://localhost:8001/tools`);
  //     setTools(res.data);
  //     setLoading(false)
  //   };
  //   fetchTools();
  // }, [])

  // console.log("res>>", tools)
  // const indexOflastTool = currentPage * toolsPerPage;
  // const indexOfFirstTool = indexOflastTool - toolsPerPage;
  // const currentTools = tools.slice(indexOfFirstTool, indexOflastTool);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTools / toolsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div >
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a onClick={() => paginate(number)} classname="page-link">{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    //     <div class="pagination">
    //   <a href="#">&laquo;</a>
    //   <a href="#" class="active">1</a>
    //   <a href="#">2</a>
    //   <a href="#">3</a>
    //   <a href="#">4</a>
    //   <a href="#">5</a>
    //   <a href="#">6</a>
    //   <a href="#">&raquo;</a>
    // </div>
  );
}
