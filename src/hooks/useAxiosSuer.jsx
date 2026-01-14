import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4800"
})

const useAxiosSuer = () => {
    return instance;
};

export default useAxiosSuer;