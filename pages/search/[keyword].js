import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Axios from "axios";
import Image from "next/image";

const Search = ()=> {
    const router = useRouter();
    const {keyword} = router.query
    const [results, setResults] = useState([]);

    useEffect(()=>{
        Axios.get("https://imdb-api.com/en/API/SearchMovie/"+process.env.IMDB_KEY_1+"/"+keyword)
        .then((response)=>{setResults(response.data.results)})
    }, [keyword])


    function seeMore (event){
        router.push("/detail/"+event.target.value);
    }

    function addList(event){
        const body = results[event.target.value]
        Axios.post("/api/movies", {
            _id: body.id,
            title: body.title,
            image: body.image,
            description: body.description
        })
        .then((response)=>{
            if(response.data.data._id){
                alert("Successfuly added to your watchlist.")
            }
        })
        .catch((error)=>{
            if(error.response.data.data.code===11000){
                alert("The movie already exists in your watchlist.")
            }

        })
    }

    if(results.length!==0){
        return (
            <div>
                <Head />
                <div className="watchlist-container">
                {results.map((result, index)=>{
                    return (
                        <div className="flex-child-list" key={result.id}>
                            <div className="list-title">
                                <p>{(result.title + " "+ result.description.split(" aka")[0]).substring(0,53)}</p>
                            </div>
                            <div>
                                <Image src={result.image} alt={result.title+" picture."} width="150" height="220" objectFit="cover" />
                            </div>
                            <button value={result.id} onClick={seeMore}>More Detail</button>
                            <button value={index} onClick={addList}>Add To Watchlist</button>
                        </div>
                    )
                    })
                }
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <Head />
            </div>)
    }
}

export default Search