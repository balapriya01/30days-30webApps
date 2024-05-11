const Card = ({activity, type }) => {
  return (
    <>
      <li className="products">
        <h3 className="topic">{activity}</h3>
        <span className="stock">{type}</span>
      </li>
    </>
  );
};

export default Card;
