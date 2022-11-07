/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Posts from "./pages/posts/Posts";
import NewPost from "./pages/posts/NewPost";
import EditPost from "./pages/posts/EditPost";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";


function App() {




  const token = localStorage.getItem('token')
  if(!token) {
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.replace('/login')
  }

  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">
            Posting random stuff
          </div>
          <div className="right menu">
            <a className="ui item" onClick={handleLogout}>Leave</a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path="new" element={<NewPost/>} />
            <Route path=":id" element={<EditPost/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App