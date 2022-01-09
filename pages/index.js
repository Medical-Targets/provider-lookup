import CardFooter from './CardFooter';
import CardTables from './CardTables';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';

const defaultEndpoint = 'https://npiregistry.cms.hhs.gov/api/?version=2.1&limit=20&city=NEW+YORK';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const providers = await res.json();
  return {
    props: {
      providers
    }
  }
}

export default function Home({providers}) {
  const [skipAmount, setSkipAmount] = useState(20);
  const [page, setPage] = useState(defaultEndpoint);

  const next = providers.result_count > 20 ? defaultEndpoint + '&skip=' + (skipAmount) : null;
  
  // useEffect(() => {
  //   if ( page === defaultEndpoint ) return;

    //do I really need to do this?

  //   async function request() {
  //     const res = await fetch(page)
  //     const nextData = await res.json();
  //     const { results: nextResults = [] } = nextData;

  //     setPage(prev => {
  //       return {
  //         ...prev,
  //         ...nextInfo
  //       }
  //     });
  //   }
  //   request();
  // }, [page])

  function handleLoadMore() {
    setPage(page = next)
    defaultEndpoint = next;
    setSkipAmount(skipAmount + 20)
  }

  return ( 
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      <div className="text-2xl my-3 text-center font-helvetica text-gray-500 uppercase tracking-wider">
        Welcome to the Health Providers Dashboard
      </div>
      <SearchBar />
      <CardTables providers={providers} />
      <CardFooter providers={providers} handleLoadMore={handleLoadMore} />
    </div>
  )
}

// export async function getStaticProps() {
//   const providers = await fetch('https://npiregistry.cms.hhs.gov/api/?version=2.1&city=lasvegas')
//     .then(res => res.json());
//   return {
//     props: {
//       providers
//     }
//   }
// }