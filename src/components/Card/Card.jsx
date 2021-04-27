import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { show } = props;
  const { index } = props;

  let topFifty = [];
  if (index < 50) {
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
          <div onClick={() => props.GetId(show)} className="cardImage">
            <img src={show.image.medium} alt="image" />
          </div>
        </Link>
        <div className="rating">
          {show.rating.average % 2 == 0
            ? show.rating.average + ".0"
            : show.rating.average}
        </div>
        <div className="showName">{show.name}</div>
      </div>
    </>
  ));
};
export default Card;
