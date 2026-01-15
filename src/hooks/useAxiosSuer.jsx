import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosSquer = axios.create({
    baseURL: "https://chatnest-gp6h.onrender.com"
})

const useAxiosSuer = () => {

     const { user } = use(AuthContext);
  // console.log(user?.accessToken)

  useEffect(() => {
    // ১. ইন্টারসেপ্টর সেটআপ
    const reqInterceptor = axiosSquer.interceptors.request.use(
      (config) => {
        const token = user?.accessToken;
        if (token) {
          // স্ট্যান্ডার্ড ফরম্যাট ব্যবহার করা ভালো
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // ২. ক্লিনআপ ফাংশন (মেমরি লিক রোধে)
    return () => {
      axiosSquer.interceptors.request.eject(reqInterceptor);
    };
    
  }, [user?.accessToken]); // Dependency list এ axiosSquer রাখাও নিরাপদ

    return axiosSquer;
};

export default useAxiosSuer;