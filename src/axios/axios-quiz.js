import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-988f6-default-rtdb.europe-west1.firebasedatabase.app/'
    // baseURL: 'https://react-quiz-3e9b0.firebaseio.com/'
})