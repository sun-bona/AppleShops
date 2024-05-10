import "../Pages/Accessories.css";
const ChAccess = (prop) => {
  const { icon, name } = prop;
  return (
    <article className="item-box">
      <div className="item-info">{icon}</div>
      <p className="name">{name}</p>
    </article>
  );
};

export default ChAccess;
