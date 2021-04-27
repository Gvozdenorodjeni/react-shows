import "./SingleShowCard.scss";

const SingleShowCard = (props) => {
  const { cast } = props;
  const { show } = props;

  return (
    <div className="SingleShowCard">
      {/* DETAILS */}
      <div className="Details">
        <div className="SingleShowCardImg">
          <img src={show.image.original} alt="image" />
        </div>
        <div className="SingleShowCardInfo">
          <div className="name">{show.name}</div>
          <div className="genre">
            {show.genres.map((e) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="summary">
            {show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </div>
        </div>
      </div>
      {/* CAST */}
      <div className="castHeader">
        <p>Cast:</p>
        <div className="GridList">
          <i
            style={props.gridList ? { display: "none" } : null}
            onClick={() => props.changeGridList()}
            className="fas fa-th"
          ></i>
          <i
            style={props.gridList ? null : { display: "none" }}
            onClick={() => props.changeGridList()}
            className="fas fa-th-list"
          ></i>
        </div>
      </div>
      <div className={props.gridList ? "grid" : ""}>
        {cast.map((e) => {
          return (
            <>
              <div className={props.gridList ? "" : "list"}>
                <div className="castImg">
                  <img src={e.person.image.medium} alt="image" />
                </div>
                <div className="castName">{e.person.name}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SingleShowCard;
