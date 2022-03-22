import * as React from 'react'
import "./Container.css"
import ImageCard from "../IntegrateImageVideoCard/ImageCard"
import Video from './Video'

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import VideoUrl from "../../Videos/download.mp4" 

SwiperCore.use([EffectCoverflow, Pagination]);

const videosUrl=[{
    url:VideoUrl
},
{
    url:VideoUrl
},
{
    url:VideoUrl
},
{
    url:VideoUrl
},
]


const videos = [1, 2, 3, 4];
function Container() {
    const [showImageCardFlag, setShowImageCardFlag] = React.useState({})
    return (
        // <center>
        <div className="main__container">
            <div className='video__container'>
                {
                    videos.map((video, index) => {
                        return (
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                // slidesPerView={"auto"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={false}
                                className="mySwiper"
                            style={{height:"100%", width:"100%", scrollSnapAlign:"start"}}
                            initialSlide={2}
                            >
                                <div className="video_slid">
                                    <SwiperSlide   key={`${index}`}>
                                            <div className="video_container_image_card">
                                                <ImageCard Index={`${index}`} />
                                            </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={`${index+1}`}>
                                        <Video url={videosUrl[index].url} className="swiper-slide-active" key={index} index={index} />
                                    </SwiperSlide>

                                </div>
                            </Swiper>
                        )
                    })
                }

            </div>
           

            </div>

        // </center>

    )
}

export default Container
