"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    const res = await fetch(
      `www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };
  // useEffect(() => {
  //   getData();
  // }, [search]);

  return (
    <div>
      <div className="">
        <input
          onChange={handler}
          type="text"
          placeholder="Search here"
          className="p-2 rounded-md outline-none border-transparent"
        />
        <button
          onClick={() => getData()}
          className="bg-pink-600 p-2 text-white uppercase"
        >
          Search
        </button>
      </div>
      <div>
        {meals?.map((meal) => (
          <div key={meal}>
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
