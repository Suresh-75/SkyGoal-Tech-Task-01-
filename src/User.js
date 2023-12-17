export default function User({ img, name }) {
  return (
    <div className="userCard">
      <div className="userImageContainer">
        <img className="userImage" src={img} />
      </div>
      <div className="userInfo">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
      </div>
    </div>
  );
}
