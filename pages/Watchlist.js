import Head from '../components/Head'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Image from 'next/image';


const Watchlist = () => {
    const router = useRouter();
    const [list, setList] = useState([]);

    useEffect(()=>{
        Axios.get("/api/movies")
        .then((response)=>{setList(response.data.data)})
        .catch((e)=>{console.log(e)})
    }, [])

    function seeMore(event){
        router.push("/detail/"+event.target.value);
    }

    function remove(event){
        Axios.delete("/api/delete/"+event.target.value)
        .then(()=>{
            setList(list.filter((movie)=>{
                return movie._id !== event.target.value;
            }))
        })
        .catch((e)=>{console.log(e)})
    }

    if(list.length!==0){
        return (
            <div>
                <Head />
                <div className="watchlist-container">
                {list.map((movie)=>{
                    return (
                        <div className="flex-child-list" key={movie._id}>
                            <div className="list-title">
                                <p>{(movie.title +" "+movie.description.split(" aka")[0]).substring(0,53)}</p>
                            </div>
                            <Image src={movie.image} alt={movie.title+" picture."} width="150" height="220" objectFit="cover" />
                            <br/>
                            <button value={movie._id} onClick={seeMore}>More Detail</button>
                            <button value={movie._id} onClick={remove}>Delete</button>
                        </div>
                    )
                })}
                </div>              
            </div>

        );        
    }else{
        return (<div> <Head /> </div>)
    }
};

export default Watchlist;