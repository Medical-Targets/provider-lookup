import { useState, useEffect } from 'react';

export default function SearchBar() {
    const [searchResults, setSearchResults] = useState([]);
    const [formInput, setFormInput] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [searching, setSearching] = useState(false);
    const [searchingError, setSearchingError] = useState(false);

    useEffect(() => {   
        if(searchTerm.length > 2) {
            setSearching(true);
            setSearchingError(false);
            fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&city=${searchTerm}`)
                .then(res => res.json())
                .then(data => {
                    setSearchResults(data);
                    setSearching(false);
                })
                .catch(err => {
                    setSearching(false);
                    setSearchingError(true);
                })
        }
    }, [searchTerm])
    
    const handleInput= (e) => { 
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="flex items-center justify-center mb-4">
            <div className="flex border-2 rounded">
                <input type="text" className="px-4 py-1 w-80" placeholder="Search..." value={searchTerm} onChange={handleInput} />
                <button type="submit" className="flex items-center justify-center px-4 border-l">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>
    )
};

        // {/* <div className="relative mt-1 p-1 pl-2 rounded-sm sm:text-sm border-solid border-[1.2px] border-gray-300 flex bg-gray-50">
        //     <SearchIcon className="h-5 w-5 text-gray-400" />
        //     <input type="text" placeholder="Search" value={searchTerm} onChange={handleInput} required className="headerinput pl-1 bg-gray-50 focus:outline-none" />
        //     <button type="submit" className="absolute right-0 top-0 mt-1 mr-1 text-gray-400">
        //         search
        //     </button>
        // </div> */}