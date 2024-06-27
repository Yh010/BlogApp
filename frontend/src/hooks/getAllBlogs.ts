import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useGetAllBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [allBlogs, setAllBLogs] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`).then(response => {
            setLoading(false)
            setAllBLogs(response.data);
        })
    },[])

    return {
        loading,
        allBlogs
    }

}