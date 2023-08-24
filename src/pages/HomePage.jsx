// import { Navigate } from 'react-router-dom';

import MainTitle from "../Components/MainTitle"
import PageContent from "../Components/PageContent"

const HomePage = () => {

   return (
      <div className="container mt-2 mt-sm-5">
         <MainTitle
            text={"Галерея путешествий"}
         />
         <PageContent />
      </div>
   )
}

export default HomePage


