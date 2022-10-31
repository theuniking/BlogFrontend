import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">
            Blog Admin
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App