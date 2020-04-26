// Import libraries, CSS, data, components, and hooks
import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./data";
import CardList from "./components/CardList";
import SkeletonCard from "./components/SkeletonCard";

// Create App container to display Skeleton loading screen when loading is set to true.
// Otherwise, display data via sections, CardList, and Cards
const App = () => {
  // React hooks
  // videos initially set to empty array, and setVideos is a function that is called to update state with dummy data.
  // loading is initially set to false, and setLoaing is a function that is called to update state to true once setTimeout is complete.
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Effect hook to call useState functions on page render and DOM updates
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // When loading, render SkeletonCard. When not laoding, render CardList and Cards
  return (
    <div className="App">
      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })
      }
    </div>
  );
};

export default App;