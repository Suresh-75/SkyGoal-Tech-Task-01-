import "./styles.css";
import Navbar from "./NavBar";
import MainBody from "./MainBody";
import UsersList from "./UsersList";
import Destinations from "./Destinations";
import StudentDiscount from "./StudentDiscount";
import BookNow from "./BookNow";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <MainBody />
      <UsersList />
      <Destinations />
      <StudentDiscount />
      <BookNow />
      <Footer />
    </>
  );
}
