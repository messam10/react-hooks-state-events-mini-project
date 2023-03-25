import React from "react";

function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map((category) => (
        <button
          key={category}
          className={category === props.selectedCategory ? "selected" : null}
          onClick={() => props.onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
