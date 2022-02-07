import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"

const Head = () => {

    const [search, setSearch] = useState("");
    const router = useRouter();

    function serachMovie(event){
        router.push("/search/"+search);
        setSearch("")
        event.preventDefault();
    }

    return (
        <div className="flex-container">
            <div >
                <Link href="/">
                    <a className="link">Home</a>
                </Link>
                <Link href="/Watchlist">
                    <a className="link">Watchlist</a>
                </Link>
            </div>
            <div>
                <form onSubmit={serachMovie}>
                    <input
                        className="search-input"
                        type="text"
                        value={search}
                        onChange={(event)=>{setSearch(event.target.value)}}
                    ></input>
                    <button className='search-button' type='submit'>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Head;