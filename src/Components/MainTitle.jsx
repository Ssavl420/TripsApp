const MainTitle = (props) => {

   const { text } = props

   return (
      <div className="row">
         <div className="col-12">
            <h1 className="display-1">{text}</h1>
         </div>
      </div>
   )
}

export default MainTitle