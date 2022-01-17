import CardFooter from '../components/CardFooter';
import CardTables from '../components/CardTables';
import { useRef, useEffect } from 'react';

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
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  // const [skipAmount, setSkipAmount] = useState(20);
  // const [endpoint, setEndpoint] = useState('');
  // const [providers, setProviders] = useState({});

  // const next = providers.result_count > 20 ? defaultEndpoint + '&skip=' + (skipAmount) : null;

  // function onSubmit(search) {
  //   async function getServerSideProps() {
  //     const res = await fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&limit=20&city=${search}`);
  //     const providers = await res.json();
  //     return {
  //       props: {
  //         providers
  //       }
  //     }
  //   }
  // }

  return ( 
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      <div className="text-2xl my-3 text-center font-helvetica text-gray-500 uppercase tracking-wider">
        Welcome to the Health Providers Dashboard
      </div>
      {/* <form action="?" onSubmit={() => onSubmit(search)}>
        <input
          name="search"
          value={search}
          onChange={evt => setSearch(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
      <div className="flex items-center justify-center mb-4">
            <form className="flex border-2 rounded">
                <input ref={inputRef} type="search" name="query" htmlFor="name" id="name" autoComplete="name" className="px-4 py-1 w-80" placeholder="Search..." value={''} required />
                <button type="submit" className="flex items-center justify-center px-4 border-l">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </form>
        </div>
      <CardTables providers={providers} />
      <CardFooter providers={providers} />
    </div>
  )
}