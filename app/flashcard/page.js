"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "/firebase";
import {
  Box,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Grid,
  Card,
  CircularProgress,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  useEffect(() => {
    async function getFlashCard() {
      if (!search || !user) return;

      setLoading(true);
      const colRef = collection(doc(collection(db, "users"), user.id), search);
      const docs = await getDocs(colRef);
      const flashcardsArray = [];

      docs.forEach((doc) => {
        flashcardsArray.push({ id: doc.id, ...doc.data() });
      });

      setFlashcards(flashcardsArray);
      setLoading(false);
    }

    getFlashCard();
  }, [user, search]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (loading) {
    return (
      <Container maxWidth="lg">
        <CircularProgress />
        <Typography>Loading Flashcards...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <CardActionArea
              onClick={() => {
                handleCardClick(flashcard.id);
              }}
            >
              <Box
                sx={{
                  perspective: "1000px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: flipped[flashcard.id]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <CardContent
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "white",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {flashcard.front}
                    </Typography>
                  </CardContent>

                  {/* Back Side */}
                  <CardContent
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "lightgray",
                      borderRadius: "8px",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {flashcard.back}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
