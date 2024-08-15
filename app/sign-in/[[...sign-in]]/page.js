import { SignIn } from "@clerk/nextjs";
import {
  Container,
  Toolbar,
  Typography,
  Button,
  AppBar,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="200">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justiftContent="center"
      >
        <Typography variant="h4">Sign In</Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
