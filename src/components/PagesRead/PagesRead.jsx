import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const PagesRead = () => {
  const [bookes, setBookes] = useState([]);

  useEffect(() => {
    axios.get("/books.json").then((data) => {
      const bookData = data.data;
      const bookwithData = bookData.map((book) => {
        const arr = {
          name: book.bookName,
          totalPage: book.totalPages,
        };
        return arr;
      });
      console.log(bookwithData);
      setBookes(bookwithData);
    });
  }, []);

  return (
    <div>
      {/* <h2>Books : {bookes.length}</h2> */}
        <BarChart width={1200} height={400} data={bookes}>
          <Bar dataKey="totalPage" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="totalPage"></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  );
};

export default PagesRead;
