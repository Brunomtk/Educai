import React, { useState } from "react";
import {
  Modal,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Backdrop,
  Fade,
  Button,
} from "@mui/material";

const Cards = () => {
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [language, setLanguage] = useState("pt");

  const handleOpen = (videoUrl, lang) => {
    setVideoSrc(videoUrl[lang]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoSrc("");
  };

  const cards = [
    {
      title: "Urso",
      image: "https://media.gettyimages.com/id/1275739838/pt/v%C3%ADdeo/big-ted-bear-sitting-on-sofa.jpg?s=640x640&k=20&c=lU6cF_MLJrlbGow7JC72P5jODWjFMtDT3T-2XMsdZpY=",
      video: {
        pt: "https://www.youtube.com/embed/rcheCUpJLEQ",
        es: "https://www.youtube.com/embed/espanhol_video_url_urso",
      },
    },
    {
      title: "Pirata",
      image: "https://rare-gallery.com/thumbs/832512-Pirates-Pirates-of-the-Caribbean-Dead-Men-Tell-No-Tales.jpg",
      video: {
        pt: "https://www.youtube.com/embed/pXIOSb0YBbU",
        es: "https://www.youtube.com/embed/espanhol_video_url_pirata",
      },
    },
    {
      title: "Jogador de Futebol",
      image: "https://pbs.twimg.com/media/F4rw4QBb0AApu14.jpg",
      video: {
        pt: "https://www.youtube.com/embed/_9WNoFVdRas",
        es: "https://www.youtube.com/embed/espanhol_video_url_jogador",
      },
    },
    {
      title: "Empreendedor",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      video: {
        pt: "https://www.youtube.com/embed/2pZ-NqAs-MI",
        es: "https://www.youtube.com/embed/espanhol_video_url_empreendedor",
      },
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ width: 300, boxShadow: 6, borderRadius: "10px" }}>
          <CardActionArea onClick={() => handleOpen(card.video, language)}>
            <CardMedia
              component="img"
              alt={card.title}
              image={card.image}
              title={card.title}
              sx={{ height: 200, width: "90%", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
              outline: "none",
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Vídeo
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mb: 2 }}>
              <Button variant="contained" onClick={() => setLanguage("pt")}>
                Português
              </Button>
              <Button variant="contained" onClick={() => setLanguage("es")}>
                Espanhol
              </Button>
            </Box>
            <iframe
              id="modal-description"
              width="100%"
              height="315"
              src={videoSrc}
              title="Vídeo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Cards;
