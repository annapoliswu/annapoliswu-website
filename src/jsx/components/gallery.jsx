import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ZoomImg from "./zoomImg"

import '../../css/gallery.scss';

// The number of columns and the gutter change by resizing the window
const Gallery = (props) => {
        return (
            <ResponsiveMasonry className={"galleryContainer"}
                columnsCountBreakPoints={{350: 1, 600: 2, 900: 3}}
                gutterBreakPoints={{350: "12px", 600: "16px", 900: "24px"}}
            >
                <Masonry>
                    {props.urls.map((url, index) => {
                        return <ZoomImg key={index + " ZoomImg"} imgSrc={url}></ZoomImg>
                    })}
                
                </Masonry>

            </ResponsiveMasonry>
        )
}

export default Gallery;
