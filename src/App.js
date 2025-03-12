import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Search, Library, Player } from "./pages";
import { Sidebar, Header } from "./components";
import YouTube from "react-youtube";

function App() {
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ"); // Default video

  return (
    <Router>
      <div className="flex h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home setVideoId={setVideoId} />} />
              <Route path="/search" element={<Search setVideoId={setVideoId} />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </main>
          <Player videoId={videoId} />
        </div>
      </div>
    </Router>
  );
}

export default App;

