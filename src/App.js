/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage"
import SearchBar from "./components/SearchBar/SearchBarContainer"
import dummyData from "./dummy-data"
// import the PostsPage and SearchBar and add them to the App


const App = () => {
 
  return (
    <div className = "App">
      <SearchBar />
      <PostsPage data={dummyData} />
      </div>
  );
};

export default App