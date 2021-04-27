import "./SingleShow.scss";
import SingleShowCard from "../../components/SingleShowCard/SingleShowCard";
import { showsContext } from "../../App";
import { useContext, useState, useEffect } from "react";

const SingleShow = (props) => {
  const { shows, id } = useContext(showsContext);

  const [cast, setCast] = useState([]);
  const [gridList, setGridList] = useState(false);
  const show = shows.find((e) => props.match.params.id == e.id);

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => response.json())
      .then((data) => setCast(data));
  }, []);

  function changeGridList() {
    setGridList(!gridList);
  }
  console.log(cast);
  return (
    <div className="SingleShow">
      {show && (
        <div className="SingleShowDetails">
          <SingleShowCard
            show={show}
            cast={cast}
            gridList={gridList}
            changeGridList={changeGridList}
          />
        </div>
      )}
    </div>
  );
};

export default SingleShow;
