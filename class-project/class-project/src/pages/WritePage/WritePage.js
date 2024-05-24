import React from "react"
import "./WritePage.css"
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import axios from "axios";

export default function WritePage() {
    const [value, setValue] = React.useState("");
    const [title, setTitle] = React.useState("");
    var imagedata;
    const handleSubmit = (event) => {
        // event.preventDefault();
        // alert(`The title of the post is: ${title}`);
        // alert(`The content of the post is: ${value}`);
    }
    const handleImage =(event)=> {
        let file = event.target.files[0];
        var reader = new FileReader();
    reader.addEventListener('load' , ()=> {
    imagedata = reader.result;
    console.log(imagedata);
    }, false)
    if(file){
      reader.readAsDataURL(file);
    }
    axios.post("http://localhost:5000/imgdata",{ img:imagedata })
        }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    
    return (
        <form method="post" action="http://localhost:5000/imgdata"  encType="multipart/form-data">
        <div className="writeContainer" data-color-mode="light">
            <div id="textAndImageContainer">
                <input type="text" id="postTitleField" name="title" placeholder="Enter the post title" onChange={handleChange} value={title}/>
                <input type="file"  name="image" />
                <input type='text' id="markdown" name="markdown" value={value}></input>
            </div>
            <MDEditor
                name="check"
                className="MDEditor"
                value={value}   
                id="markup"
                onChange={setValue}
                visibleDragbar={false}
                autoFocus={true}
                height={500}
                textareaProps={{
                    placeholder: "This is markdown editor, for help with syntax click on the help button at the top right...",
                }} />
            <button type="submit" className="postButton" onClick={handleSubmit}>Post</button>
        </div>
            </form>
    )
}