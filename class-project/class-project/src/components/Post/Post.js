import React, { useEffect, useState }   from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { useNavigate } from "react-router-dom"
import "./Post.css"

export default function Post(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/sample-project-title");
    }
    const displayPosts=(props)=>{
    const notes= props;
    // console.log(JSON.stringify(notes.data));
    // console.log(notes.data.length)
    if(notes.data.length>0){
        // console.log(notes.data[0].title);
        notes.data.map((note,index)=>{
            // console.log(note.title);
            return (
                <div className="container" key={note._id} >
                <h2 className="postTitle"> htoidfvlsndfklmsdlkfmlsd</h2>
                <img className="postCover" src={require("../../static/sample-image.jpg")} alt="post cover" />
                <LinesEllipsis ellipsis="..." maxLine="4" className="postDescription" text={note.markdown}></LinesEllipsis>
            </div>
            )
        })
    }
    else{  return(<h3>No posts Yet</h3>)
    }
}

    // const [title, settitle] = useState('');
    // const [value, setvalue] = useState('');
    // async function handleinput(){
    //     const data = await Datain();
    //     console.log(Datain);
    //     if(data){
    //         const info= await JSON.parse(JSON.stringify(data));
    //         settitle(info.title);
    //         setvalue(info.markdown);
    //     }
    //     else{console.log("error")}
    // }
return (
        <>
        {displayPosts(props)}
        </>
    )
}