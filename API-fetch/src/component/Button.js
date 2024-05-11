
const Button = ({name, Click}) => {
  return (
    <>
    <button className="btn" onClick={Click}>{name}</button>
    </>
  )
}

export default Button
