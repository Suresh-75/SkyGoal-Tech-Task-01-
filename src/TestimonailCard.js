export default function TestimonailCard({ img }) {
  return (
    <div className="testCard">
      <img src={img} />
      <h2>Corey Korsgard</h2>
      <span>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </span>
    </div>
  );
}
