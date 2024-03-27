
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStoredBook } from '../../utility/LoacalStorage';
import { useLoaderData } from 'react-router-dom';


const colors = ['#0088FE', '#00C49F'];
const data = [
  {
    name: 'Page A',
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesRead = () => {
 
  const bookDetails = useLoaderData();

  const [chartData, setChartDdata] = useState([])
  
  useEffect(() => {
    const storedBook = getStoredBook(); 

    if(bookDetails.length > 0){
      const bookApplied = [];
      for(const bookId of storedBook){
        const book = bookDetails.find((book) => book.bookId == bookId)
        if(book){
          bookApplied.push(book);
        }
      }
      setChartDdata(bookApplied);
    }
  },[])
  return (
    <BarChart
    width={1000}
    height={500}
    data={chartData}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="bookName" />
    <YAxis />
    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
      {
      chartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />))
      }
    </Bar>
  </BarChart>
  );
};

export default PagesRead;
