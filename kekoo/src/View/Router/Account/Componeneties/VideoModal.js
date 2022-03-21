import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Video from "../../../MainContent/Video"
import ImageCard from "../../../IntegrateImageVideoCard/ImageCard"


import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination]);
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, open, url,index } = props;

  const handleClose = () => {
    onClose("");
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog scroll='body' className="video__modal" onClose={handleClose} open={open}>
      {/* <Video url={url} /> */}
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
                                        <Video  url={url} className="swiper-slide-active" key={index} index={index} />
                                    </SwiperSlide>

                                </div>
                            </Swiper>
    </Dialog>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default function VideoModal({ setIndex, currentIndex, open, index, setOpen, url }) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setIndex(-1);
  };

  return (
    <div >
      <SimpleDialog
        url={url}
        open={currentIndex === index}
        onClose={handleClose}
        index={index}
      />
    </div>
  );
}