import * as React from 'react'
import "./Container.css"
import ImageCard from "../IntegrateImageVideoCard/ImageCard"
import Video from './Video'
import ChatbotComponent from './Chatbot/Componenties/ChatbotComponent'

const videos = [1, 2, 3, 4];
function Container() {
    const [showImageCardFlag, setShowImageCardFlag] = React.useState({})
    return (
        <center>
            <div className='video__container'>
                {
                    videos.map((video, index) => {
                        return (
                            <div className="video_slid">
                                {
                                    showImageCardFlag[index] &&
                                    <div className="video_container_image_card">
                                        <ImageCard Index={index} />
                                    </div>
                                }
                                <Video key={index} index={index}  showImageCardFlag={showImageCardFlag} setShowImageCardFlag={setShowImageCardFlag}/>
                            </div>
                        )
                    })
                }
            </div>
           


        </center>

    )
}

export default Container
