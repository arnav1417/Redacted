import React, { useEffect, useState }  from "react";
import Post from "../../components/Post/Post";
import "./HomePage.css"

export default function HomePage() {
    const [cont, getcontent] = useState('')
    useEffect(()=>{
        Handledata();
    },[]);
    async function Handledata(){
        console.log("inside handleData")
        try{
            const response = await fetch(
                `http://localhost:5000/data`
            )
            const data = await response.json();
            const content = data;
            getcontent(content);

        }catch (e){
            console.log(e);
        }
        return null;
    }
    return (
        <main className="postsContainer">
            <Post data={cont}/>
        </main>
    )
}