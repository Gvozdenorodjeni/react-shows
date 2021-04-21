import "./SingleShow.scss";
import { showsContext } from "../../App";
import { useContext } from "react";

const SingleShow = (props) => {
  const { shows, setShows } = useContext(showsContext);

  const show = shows.find((e) => props.match.params.id == e.id);
  console.log(show.name);

  return null;
};

export default SingleShow;
