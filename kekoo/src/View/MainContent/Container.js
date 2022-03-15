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
    url:"https://v16-webapp.tiktok.com/1555e3f7cc28a3dd8a3bf37041287b8c/62303eb7/video/tos/alisg/tos-alisg-pve-0037c001/d0b1b640791b4c568f6153ab0f16e267/?a=1988&br=2026&bt=1013&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th1mdvDXq&l=202203150122170102450050271781A51F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzo8bWc6Zm5uOzMzODczNEApZzg2Njg0ZjtmN2c1OTU3NGdjaC41cjRfL2VgLS1kMS1zc14uMF4zLTRiNjReNF40NWI6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/58dd0f3a74e87945ab1947515470d24b/62303f01/video/tos/alisg/tos-alisg-pve-0037c001/557f6f9f69d2460ea2e206a6785dc449/?a=1988&br=1628&bt=814&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th_idvDXq&l=202203150123330102451300940D81EE86&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29lajg6ZnRmOTMzODczNEApZTRpZzw5Z2VnNzlkZTU0Z2dzYy1gcjRfbHJgLS1kMS1zc2BiNWMyNWMyYl5gMzVhXjQ6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/66019e12ceb58a97f40eabd32d784e17/62303f46/video/tos/useast2a/tos-useast2a-ve-0068c003/74fd517da3d444e4a44c0fc5e57bbde5/?a=1988&br=2032&bt=1016&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th_idvDXq&l=202203150123330102451300940D81EE86&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajxvZGllaGV1NjMzNzgzM0ApOjU8Z2hoaDw4N2U1ZTxmN2dqM2VpcC9xZ2ZgLS1kLzZzczEyMWNhLzUxYjViMy0uMjM6Yw%3D%3D&vl=&vr="
},
{
    url:"https://v16-webapp.tiktok.com/66019e12ceb58a97f40eabd32d784e17/62303f46/video/tos/useast2a/tos-useast2a-ve-0068c003/74fd517da3d444e4a44c0fc5e57bbde5/?a=1988&br=2032&bt=1016&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39Znz7Th_idvDXq&l=202203150123330102451300940D81EE86&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajxvZGllaGV1NjMzNzgzM0ApOjU8Z2hoaDw4N2U1ZTxmN2dqM2VpcC9xZ2ZgLS1kLzZzczEyMWNhLzUxYjViMy0uMjM6Yw%3D%3D&vl=&vr="
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
                                        <Video url={videosUrl[index].url} isDisplayOnProfile={false} className="swiper-slide-active" key={index} index={index} />
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
