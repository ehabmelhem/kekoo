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
    url:"https://v16-webapp.tiktok.com/3731ce8049cf0a51b34bbb7543e165a9/623620b9/video/tos/alisg/tos-alisg-pve-0037c001/f6781e308c194e579469efb5789b4d30/?a=1988&br=2644&bt=1322&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th1-Z_DXq&l=202203191227540101921680910ECC9414&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k0ZGg6ZmRwOzMzODczNEApOWY2NzkzNGVmNzk1aTk3PGdjLS40cjQwaW1gLS1kMS1zc2EwNi40LjIzNjI2NC5jMmI6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/3731ce8049cf0a51b34bbb7543e165a9/623620b9/video/tos/alisg/tos-alisg-pve-0037c001/f6781e308c194e579469efb5789b4d30/?a=1988&br=2644&bt=1322&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th1-Z_DXq&l=202203191227540101921680910ECC9414&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k0ZGg6ZmRwOzMzODczNEApOWY2NzkzNGVmNzk1aTk3PGdjLS40cjQwaW1gLS1kMS1zc2EwNi40LjIzNjI2NC5jMmI6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/3731ce8049cf0a51b34bbb7543e165a9/623620b9/video/tos/alisg/tos-alisg-pve-0037c001/f6781e308c194e579469efb5789b4d30/?a=1988&br=2644&bt=1322&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th1-Z_DXq&l=202203191227540101921680910ECC9414&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k0ZGg6ZmRwOzMzODczNEApOWY2NzkzNGVmNzk1aTk3PGdjLS40cjQwaW1gLS1kMS1zc2EwNi40LjIzNjI2NC5jMmI6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/3731ce8049cf0a51b34bbb7543e165a9/623620b9/video/tos/alisg/tos-alisg-pve-0037c001/f6781e308c194e579469efb5789b4d30/?a=1988&br=2644&bt=1322&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th1-Z_DXq&l=202203191227540101921680910ECC9414&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3k0ZGg6ZmRwOzMzODczNEApOWY2NzkzNGVmNzk1aTk3PGdjLS40cjQwaW1gLS1kMS1zc2EwNi40LjIzNjI2NC5jMmI6Yw%3D%3D&vl=&vr="
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
