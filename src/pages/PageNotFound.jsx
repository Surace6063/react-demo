import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    }

  return (
    <div className="mt-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold">
            404 Page not found
        </h1>
        
        <button onClick={backToHome} className="primary_button">
            Go back to home page
        </button>
    </div>
  )
}
export default PageNotFound