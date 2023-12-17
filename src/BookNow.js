export default function BookNow() {
  return (
    <div className="bookNowContainer" style={{ position: "relative" }}>
      <div className="bookNowImage">
        <img src="Webtaskresources/Group 167.png" />
        <img
          src="Webtaskresources/Subtract5.png"
          style={{
            position: "absolute",
            top: "10%",
            left: "40%",
            width: "110px",
            height: "110px",
          }}
        />
      </div>
      <div className="formContainer">
        <form>
          <h2 style={{ fontFamily: "Roboto", fontSize: "33px" }}>Book now</h2>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "19px",
              padding: "1rem 0",
              lineHeight: "27px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <br />
          <br />
          <label>CITY</label>
          <br />
          <input style={{ width: "100%" }} type="text" placeholder="City" />
          <main className="inputContainer">
            <div>
              <label>ARRIVAL</label>
              <input type="text" placeholder="Arrival" />
              <label>STAR</label>
              <input type="number" placeholder="Star" />
            </div>
            <div>
              <label>DEPARTURE</label>
              <input type="text" placeholder="Departure" />
              <label>ROOM</label>
              <input type="number" placeholder="Room" />
            </div>
          </main>
          <button className="bookBtn">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
}
