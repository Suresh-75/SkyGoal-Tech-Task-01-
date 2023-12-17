import TestimonialCardContainer from "./TestimonialCardContainer";
export default function Footer() {
  return (
    <footer className="footerContainer">
      <p>Testimonials</p>
      <TestimonialCardContainer />
      <p
        style={{
          fontSize: "40px",
          fontFamily: "inter",
          fontWeight: "600",
          paddingBottom: "0",
          paddingTop: "7rem",
        }}
      >
        Student Special: Discounted rates <br /> on tropical getaways!
      </p>
      <FootNav />
    </footer>
  );
}
function FootNav() {
  return (
    <>
      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          fontWeight: "400",
          lineHeight: "22px",
          width: "30%",
          margin: "0 auto",
        }}
      >
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>
      <div className="footNav">
        <ul>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Sales and Refunds</a>
          </li>
          <li>
            <a href="">Legal</a>
          </li>
        </ul>
        <ul style={{ color: "black", fontWeight: "700" }}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Membership</a>
          </li>
          <li>
            <a href="">Joins</a>
          </li>
        </ul>
      </div>
    </>
  );
}
