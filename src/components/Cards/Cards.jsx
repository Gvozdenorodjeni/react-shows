import "./Cards.scss";
import Card from "../Card/Card";
import { useState, useContext } from "react";
import { showsContext } from "../../App";

const Cards = () => {
  const { shows, setShows } = useContext(showsContext);
  const [inputValue, setInputValue] = useState("");
  let filteredData = shows.filter((e) =>
    e.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  console.log(shows, "Cards Shows");
  return (
    <>
      <div className="Search">
        <span>Search</span>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        ></input>
      </div>
      <div className="Cards">
        {filteredData.map((show, index) => (
          <Card show={show} index={index} />
        ))}
      </div>
    </>
  );
};
export default Cards;
