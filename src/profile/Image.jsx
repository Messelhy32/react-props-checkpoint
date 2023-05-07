import PropTypes from "prop-types";
function Image(props) {
  const styleObject = {
    width: "50%",
  };
  return (
    <div>
      <img style={styleObject} src={props.img} alt="" />
      <h1>{props.title}</h1>
    </div>
  );
}
Image.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string,
};
export default Image;
