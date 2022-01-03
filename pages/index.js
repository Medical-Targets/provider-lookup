import { useState, useEffect } from 'react';
import CardFooter from './CardFooter';
import CardTables from './CardTables';

export default function Home() {
  const [providers, setProviders] = useState([]);
    // make a call to the api
    // use the data to render the page
    // async function getData() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await res.json();
    //     // console.log(data);
    //     setProviders(res.data)
    // }
    // const names = getData();

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="text-2xl text-center font-helvetica text-gray-500 uppercase tracking-wider">
        Welcome to the Health Providers Dashboard
      </div>
      <CardTables />
      <CardFooter />
    </div>
  )
}
