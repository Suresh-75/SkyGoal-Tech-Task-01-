export default function StudentDiscount() {
  return (
    <div
      className="container"
      style={{
        position: "relative",
      }}
    >
      <div className="studentDiscount">
        <div id="discountText">
          <img
            src="Webtaskresources/Ellipse 53.png"
            style={{
              position: "absolute",
              top: "10%",
              width: "38px",
              height: "38px",
            }}
          />
          <img
            src="Webtaskresources/Subtract5.png"
            style={{
              position: "absolute",
              top: "7%",
              right: "60%",
              width: "60px",
              height: "60px",
            }}
          />
          <img
            src="Webtaskresources/Ellipse 55.png"
            style={{
              position: "absolute",
              top: "25%",
              right: "53%",
              width: "25px",
              height: "25px",
            }}
          />
          <img
            src="Webtaskresources/Ellipse 54.png"
            style={{
              position: "absolute",
              top: "85%",
              left: "40%",
              width: "16px",
              height: "16px",
            }}
          />
          <p
            style={{ fontSize: "20px", fontFamily: "Inter", fontWeight: "400" }}
          >
            Get 20% off for student
          </p>
          <p
            style={{ fontSize: "30px", fontFamily: "Inter", fontWeight: "500" }}
          >
            <span style={{ fontSize: "40px" }}>
              <b>Student discounts available.</b>
            </span>
            <br />
            <span
              style={{
                fontSize: "30px",
                fontFamily: "Inter",
                fontWeight: "300",
              }}
            >
              Get ready for some fun in the sun
            </span>
          </p>
          <ul style={{ fontSize: "16px", fontFamily: "Inter" }}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit </li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <button className="exploreBtn">Explore More</button>
        </div>
        <div>
          <img src="Webtaskresources/Mask group.png" />
          <img
            src="Webtaskresources/Subtract4.png"
            style={{
              position: "absolute",
              top: "70%",
              right: "17%",
              width: "170px",
              height: "170px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
