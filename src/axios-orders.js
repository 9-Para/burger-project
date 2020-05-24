import axios from "axios";

const instance=axios.create({
 baseURL: "https://rs-burger-project.firebaseio.com/"
});
export default instance;