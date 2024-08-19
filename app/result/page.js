"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { CircularProgress, Typography, Container, Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

const ResultPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the session_id is present before making the API call
    if (!session_id) {
      setError("Session ID is required but not provided.");
      setLoading(false);
      return;
    }

    const fetchCheckoutSession = async () => {
      try {
        const response = await fetch(
          `/api/checkout_sessions?session_id=${session_id}`
        );
        const sessionData = await response.json();

        if (response.ok) {
          setSession(sessionData);
        } else {
          setError(
            sessionData.error?.message || "Failed to fetch session details."
          );
        }
      } catch (err) {
        console.error("Fetching error:", err);
        setError("An error occurred while retrieving the session.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckoutSession();
  }, [session_id]);

  if (loading) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6">Error: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      {session?.payment_status === "paid" ? (
        <>
          <Typography variant="h4">Payment successful</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Session ID: {session_id}</Typography>
            <Typography variant="body1">
              We have received your payment. You will receive an email with the
              order details shortly.
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h4">Payment Failed</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Session ID: {session_id}</Typography>
            <Typography variant="body1">
              Your payment was unsuccessful. Please try again or contact support
              if the issue persists.
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ResultPage;
