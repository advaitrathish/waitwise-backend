import "./InfoCard.css";

function InfoCard({ title, value }) {
  return (
    <div className="infocard">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default InfoCard;