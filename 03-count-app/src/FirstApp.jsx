import PropTypes from "prop-types";
//Se recomienda siempre destructurar las props
export const FirstApp = ({title,subtitle,nombre}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{nombre}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  nombre: PropTypes.string
}

FirstApp.defaultProps = {
  // title : "no hay titulo"
  subtitle: "que onda",
  nombre: "perro"
}