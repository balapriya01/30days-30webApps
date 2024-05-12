

const Alert = ({type, message}) => {
  return (
    <>
     <div className={`sub-${type}`}>
          <h3 className={`text-${type}`}>{message}</h3>
          <button className={`btn-${type}`}>X</button>
        </div>
    </>
  )
}

export default Alert;


