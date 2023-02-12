import PropTypes from "prop-types";
//Se recomienda siempre destructurar las props
export const FirstApp = ({title,subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title : "no hay titulo"
}