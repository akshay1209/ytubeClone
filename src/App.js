import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './componenets/Header';
import Feed from './componenets/Feed';
import SearchResult from './componenets/SeachResult';
import VideoDetails from './componenets/VideoDetails';
import {AppContext} from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route
           path="/searchResult/:searchQuery" 
           element={<SearchResult/>}
           />
          <Route path="/video/:id" element={<VideoDetails/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
