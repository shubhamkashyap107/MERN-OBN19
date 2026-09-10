import { useState } from "react"
import axios from "axios"

const cloudinaryUrl = "https://api.cloudinary.com/v1_1/obn19/upload"

const App = () => {


  const[file, setFile] = useState(null)

  return (
    <div>
      <div >
        <input 
          onChange={async(e) => {
            setFile(e.target.files[0])
            // const reader = new FileReader()

            // reader.readAsDataURL(file)

            // reader.onloadend = () => {
            //   console.log(reader.result)
            // }
          }}
          type="file" 
        />

        <button onClick={async() => {
          if(!file)
          {
            return
          }

          const form = new FormData()
          form.append("file", file)
          form.append("upload_preset", "shubhampreset")

          const res = await axios.post(cloudinaryUrl, form)
          console.log(res)

          // fetch(cloudinaryUrl, {
          //   method : "POST",
          //   headers : {
          //     "content-type" : "application/json"
          //   },
          //   body : JSON.stringify({})
          // }) 1 -> res, res.json -> 2


        }}>Submit</button>
      </div>


    </div>
  )
}

export default App






// const App = () => {
//   return (
//     <form 
//       onSubmit={(e) => {
//         e.preventDefault()
//       }}
//       method='POST' 
//       action={"https://api.cloudinary.com/v1_1/obn19/upload"} 
//       encType="multipart/form-data"
//     >
//       <input name='file' type="file" />
//       <input name='upload_preset' value={"shubhampreset"} type="hidden" />
//       <button>Upload</button>
//     </form>
//   )
// }

// export default App