import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { show } = props;
  const { index } = props;

  let topFifty = [];
  if (index < 5) {
    topFifty.push(show);
  }

  return topFifty.map((e) => (
    <>
      <div className="Card">
        <Link
          to={{
            pathname: `/show/${show.id}`,
          }}
        >
          <div className="cardImage">
            <img src={show.image.medium} alt="image" />
          </div>
          <div className="rating">{show.rating.average}</div>
          <div className="showName">{show.name}</div>
        </Link>
      </div>
    </>
  ));
};
export default Card;
