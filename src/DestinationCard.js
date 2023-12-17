export default function DestinationCard({ img, name, location, left }) {
  return (
    <div className="destinCard" style={{ position: "relative" }}>
      <img src={img} />
      <h2>{name}</h2>
      <span>
        {location}
        <img
          style={{
            width: "50px",
            height: "50px",
            position: "relative",
            left: left,
            cursor: "pointer",
          }}
          src="Webtaskresources/Icons.png"
        />
      </span>
    </div>
  );
}
