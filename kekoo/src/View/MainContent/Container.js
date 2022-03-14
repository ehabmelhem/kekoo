import * as React from 'react'
import "./Container.css"
import ImageCard from "../IntegrateImageVideoCard/ImageCard"
import Video from './Video'

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination]);

const videosUrl=[{
    url:"https://v16-webapp.tiktok.com/de9930831aac5310a1f8066d0a9db0c3/622fdb15/video/tos/alisg/tos-alisg-pve-0037c001/fbb2d5866bf04baaa0e6ce963c1a76eb/?a=1988&br=3376&bt=1688&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th7txvDXq&l=2022031418155601019216806605434C8C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y2bjo6Zjo5OzMzODczNEApOmc4NDU3M2U4NzU1NDk6aGdgXjVwcjQwcWFgLS1kMS1zczUyNWEvNS4vNi5iXy1jLS06Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/5bf4a3199ae4368404e631142804d951/622fdacc/video/tos/alisg/tos-alisg-pve-0037c001/ea77d4700833465797fa0c8e2c4311c0/?a=1988&br=6124&bt=3062&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th7txvDXq&l=2022031418155601019216806605434C8C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhoeTM6Zmk8OzMzODczNEApOmQ0NTs1aDw2NzM2NmZpZ2dqbC5rcjRfLWRgLS1kMS1zczI2Ly9gXjFfMS9jLmNfMi06Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/de9930831aac5310a1f8066d0a9db0c3/622fdb15/video/tos/alisg/tos-alisg-pve-0037c001/fbb2d5866bf04baaa0e6ce963c1a76eb/?a=1988&br=3376&bt=1688&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th7txvDXq&l=2022031418155601019216806605434C8C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Y2bjo6Zjo5OzMzODczNEApOmc4NDU3M2U4NzU1NDk6aGdgXjVwcjQwcWFgLS1kMS1zczUyNWEvNS4vNi5iXy1jLS06Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/5bf4a3199ae4368404e631142804d951/622fdacc/video/tos/alisg/tos-alisg-pve-0037c001/ea77d4700833465797fa0c8e2c4311c0/?a=1988&br=6124&bt=3062&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th7txvDXq&l=2022031418155601019216806605434C8C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhoeTM6Zmk8OzMzODczNEApOmQ0NTs1aDw2NzM2NmZpZ2dqbC5rcjRfLWRgLS1kMS1zczI2Ly9gXjFfMS9jLmNfMi06Yw%3D%3D&vl=&vr="
},
]


const videos = [1, 2, 3, 4];
function Container() {
    const [showImageCardFlag, setShowImageCardFlag] = React.useState({})
    return (
        <center>
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
           


        </center>

    )
}

export default Container
