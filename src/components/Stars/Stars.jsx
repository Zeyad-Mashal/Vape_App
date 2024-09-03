"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Stars() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              style={{ display: "none" }}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon icon={faStar} />
          </label>
        );
      })}
    </div>
  );
}
