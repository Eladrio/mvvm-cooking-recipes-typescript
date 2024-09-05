import React from "react";

export default function RecipeItem({ uri, label }) {
  return (
    <div className="recipe-item" key={uri}>
      {label}
    </div>
  );
}
