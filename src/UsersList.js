import User from "./User";
import ExploreDetails from "./ExploreDetails";
export default function UsersList() {
  return (
    <div className="userContainer" style={{ position: "relative" }}>
      <main>
        <User img="Webtaskresources/Rectangle 25.png" name="Andrew Garfield" />
        <User img="Webtaskresources/Rectangle 26.png" name="Jenny Wilson" />
        <User img="Webtaskresources/Rectangle 27.png" name="Tom Holland" />
      </main>
      <img
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          width: "46px",
          height: "46px",
        }}
        src="Webtaskresources/Ellipse 56.png"
      />
      <main id="exploreDetails">
        <img
          style={{
            position: "absolute",
            top: "5%",
            right: "20%",
            width: "170px",
            height: "170px",
          }}
          src="Webtaskresources/Subtract3.png"
        />
        <ExploreDetails />
      </main>
    </div>
  );
}
