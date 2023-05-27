import React, { useState } from 'react';
import axios from "axios";
import "./FrontEnd.css";

const UploadFiles = () => {
    const [upload, setUpload] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(upload)
        const formData = new FormData();
        formData.append("file", upload);
        formData.append("description", description);

        console.log(formData.get("description"));

        axios
            .post("http://localhost:3001/api/files", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("myUserToken")}`
                },
            })
            .then((response) => {
                // handle the response
                console.log(response);
            })
            .catch((error) => {
                // handle errors
                console.log(error);
            });
    }

    const handleFileUpload = (e) => {
        let file = e.target.files[0]

        setUpload(file)
    }
    return (
        <div>
            <form className='container' onSubmit={handleSubmit}>
                <span>File Upload:</span>
                <br />
                <input type="file" onChange={handleFileUpload} />
                <br />
                <span>File Description:</span>
                <br />
                <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UploadFiles