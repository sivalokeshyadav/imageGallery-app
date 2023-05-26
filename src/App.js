import axios from "axios"
import {useState} from "react"
import Gallery from "./Gallery"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App=()=>{
  const [search,setSearch]=useState("");
  const [data,setData]=useState([])
  const changehandler=e=>{
    setSearch(e.target.value)
  }
const submitHandler=e=>{
  e.preventDefault()
  
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
    response=>setData(response.data.photos.photo))
}

  return(
    <div className="App">
      <center>
        <h2>Gallery Snapshot</h2>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" value={search} onChange={changehandler} placeholder="Enter Your Name"  />
          <br/>
          <input type="submit" name="Search" />
        </form>
        <br/><br/>
        {data.length>=1 ? <Gallery data={data}/>:<h4>No data loaded</h4>}
      </center>
    </div>
  )
}

export default App;
