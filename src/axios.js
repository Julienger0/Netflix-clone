import axios from "axios"


//base url to make requests to the movie database
const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
//when axios will be called url typed will be added to baseUrl => "https://api.themoviedb.org/3..."
export default instance