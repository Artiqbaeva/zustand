import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const  Stats = () =>{
  const [products, setProducts] = useState<any>(null)
  const [count, setCount] = useState(0)
  useEffect(()=> {
     fetch(`https://dummyjson.com/products?limit=5&skip=${count * 5}`).then((res)=> res.json()).then((data)=> {
      setProducts(data.products); 
     })
  }, [count])

  const titles = products?.map((product: any) => product.title)
  const stocks = products?.map((product: any) => product.stock)
  const data = {
    labels: titles,
    datasets: [
      {
        label: 'Stocks',
        data: stocks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
  <div>
    <Pie  data={data} />
    <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count <= 0}
          className={`px-3 py-1 rounded-lg text-white font-medium cursor-pointer shadow-md transition 
            ${count <= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}
          `}
        >
          Prev
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 cursor-pointer text-white font-medium shadow-md transition"
        >
          Next
        </button>
      </div>
  </div>
  )}

export default React.memo(Stats)