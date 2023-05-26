import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Gallery.css"

const Gallery=({data})=>{
    return(
        <div className="main-container">
            <div className="row">
            {data.map((image)=>
                <div key={image.id}>
                    <div className="image-rows">
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}  height="200" width="250" alt={image.title} />
                    </div>
                </div>
            )}
            </div>
            
        </div>
    )
}

export default Gallery