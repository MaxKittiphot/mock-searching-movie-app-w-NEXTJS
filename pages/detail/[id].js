import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";
import Head from "../../components/Head";
import Image from "next/image";
const moment = require("moment")

const Detail = () => {
    
    const router = useRouter();
    const {id} = router.query
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        Axios.get("https://imdb-api.com/en/API/Title/"+process.env.IMDB_KEY_1+"/"+id)
        .then((response)=>{
            setDetail(response.data)
        })
    })

    async function addList(){
        try{
            console.log("here")
           const response = await Axios.post("/api/movies", {
                _id: id,
                title: detail.title,
                image: detail.image,
                description: detail.year
            })
            alert("Successfully added to your watchlist.")
        }catch (error){
            if(error.response.data.data.code===11000){
                alert("The movie already exists in your watchlist.")
            }
        }
    }

    if(Object.keys(detail).length!==0){
        return (
            <div>
                <Head />
                <div className="detail-container">
                    <h1 className="head">{detail.fullTitle}</h1>
                    <div className="detail-image">
                        <Image src={detail.image} alt={detail.title+" picture."} height="350" width="240" objectFit="cover"/>
                    </div>
                    <div className='description'>
                        <p>{"Plot: " + detail.plot}</p>
                        <p>{"IMDb Rating: "+detail.imDbRating+"/10"}</p>
                        <p>{"Runtime: "+detail.runtimeMins+ " min"}</p>
                        <p>{"Release date: "+ moment(detail.releaseDate,"YYYY-MM-DD").format("DD-MM-YYYY")}</p>
                        <p>{"Director: "+detail.directors}</p>
                        <p>{"Top cast: "+detail.stars}</p>
                        <p>{"Genre: "+detail.genres}</p>
                        <p>{"Languages: "+detail.languages}</p>
                        <div className='bot-text'>
                            <a className="full" href={"https://www.imdb.com/title/"+detail.id}>More Detail</a>
                            <br/>
                            <button className="bot-button" onClick={addList}>Add to watchlist</button>
                        </div>
        
                    </div>
        
                </div>
                </div>
        );
    } else{
        return (
            <div>
                <Head />
            </div>)
    }
};

export default Detail;