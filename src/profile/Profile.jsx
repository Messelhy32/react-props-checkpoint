import PropTypes from "prop-types";
function Profile(props) {
  console.log(props);
  return (
    <>
      <h1>{props.fullName}</h1>
      <h2>{props.bio}</h2>
      {props.Image}
      <button onClick={props.handleName}>Click ME</button>
    </>
  );
}
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  Image: PropTypes.any.isRequired,
  handleName: PropTypes.func,
};
Profile.defaultProps = {
  fullName: "John Doe",
};
export default Profile;
