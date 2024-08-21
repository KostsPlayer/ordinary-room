import React, { useState, useCallback, Fragment } from "react";
import { Baby } from "lucide-react";

function Hero() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);

  const handleActive = useCallback((index) => {
    setCategoryActiveIndex(index);
  }, []);

  return (
    <div className="hero">
      <div className="hero-categories">
        {[...Array(4)].map((_, index) => (
          <Fragment key={index}>
            <div
              onClick={() => handleActive(index)}
              className={`hero-categories-item ${
                categoryActiveIndex === index ? "active" : ""
              }`}
            >
              <Baby className="icon" strokeWidth={1.5} size={40} />
              <div className="text">Baby Comil</div>
              {categoryActiveIndex === index && (
                <div className="go-detail">
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            {index < 3 && <div className="hero-categories-line"></div>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Hero;
