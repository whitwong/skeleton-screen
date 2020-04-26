// Import libraries for component
import React from "react";
import Skeleton from "react-loading-skeleton";

// Create skeleton loading screen.
// Using a skeleton screen is an alternative to the loading wheel. 
// Provides user experience that gives feedback on what to expect the content to look like.
const SkeletonCard = () => {
  return (
    <section>
      <h2 className="section-title">
        <Skeleton height={30} width={300} />
      </h2>

      <ul className="list">
        {/* Create an Array with specified number of objects */}
        {/* Fill the array with skeleton objects and map properties to all objects */}
        {Array(11)                  
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={180} />
              <h4 className="card-title">
                <Skeleton circle={true} height={50} width={50} />
                <Skeleton height={36} width={'80%'} />
              </h4>
              <p className="card-channel">
                <Skeleton width={'60%'} />
              </p>
              <div className="card-metrics">
                <Skeleton width={'90%'} />
              </div>
            </li>
          ))        
        }
      </ul>
    </section>
  );
};

export default SkeletonCard;