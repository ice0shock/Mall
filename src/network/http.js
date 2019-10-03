import axios from 'axios'
const http=axios.create({
    baseURL:"http://123.207.32.32:8000/api/v1"
})
export default http