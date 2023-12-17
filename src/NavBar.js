export default function Navbar() {
  return (
    <nav>
      <div className="navBar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <a>Membership</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="offerLink">Offers</a>
          </li>
          <li>
            <a id="coursesLink">Courses</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
