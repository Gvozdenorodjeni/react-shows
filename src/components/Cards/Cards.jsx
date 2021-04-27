import "./Cards.scss";
import Card from "../Card/Card";
import { useState, useContext } from "react";
import { showsContext } from "../../App";

const Cards = () => {
  const { shows, GetId } = useContext(showsContext);
  const [inputValue, setInputValue] = useState("");

  let filteredData = shows.filter((e) =>
    e.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  return (
    <>
      <div className="Search">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        ></input>
        <span>Search</span>
      </div>
      <div className="Cards">
        {filteredData.map((show, index) => (
          <Card GetId={GetId} show={show} index={index} />
        ))}
      </div>
    </>
  );
};
export default Cards;
