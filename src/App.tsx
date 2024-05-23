import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<UserPage />} />
        <Route path="/:username" element={<HomePage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
