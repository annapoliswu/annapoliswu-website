import React from "react"
import ZoomImg from "./zoomImg"
import VideoFrame from "./videoFrame"

import '../../css/masonGrid.scss';


import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: '.2s',
    percentPosition: true,
    columnWidth: '.gridSizer',
    gutter: '.gutterSizer',
    itemSelector: '.gridItem'
};

const imagesLoadedOptions = { };

const MasonGrid = (props) => {
        return (
            <Masonry
                className={'masonGrid'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >   <div class="gridSizer"></div>
                <div class="gutterSizer"></div>
                {props.imgList.map(({url, alt, title}, index) => {
                    return( 
                        <div className="gridItem" > 
                            {url.includes("youtube") ? (
                                <VideoFrame
                                    videoUrl={url}
                                    title={title}
                                ></VideoFrame>
                            ):(
                                <ZoomImg 
                                    className="gridZoomImg" 
                                    key={index + " zoomImg"} 
                                    imgSrc={url} 
                                    alt={alt}>
                                </ZoomImg>
                            )}
                        </div>)
                    })}
            </Masonry>
        );
    }

export default MasonGrid;
