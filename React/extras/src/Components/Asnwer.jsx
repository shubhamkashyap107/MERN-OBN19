import { useParams } from "react-router-dom"

const Asnwer = () => {

  const {kuchbhi} = useParams()
  // console.log(obj)

  return (
    <div>
        <h1>city is {kuchbhi}</h1>
    </div>
  )
}

export default Asnwer