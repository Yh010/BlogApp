import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name":string
    }
}
export const useGetAllBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [allBlogs, setAllBLogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        }).then(response => {
            setAllBLogs(response.data.blogs);
            setLoading(false)
            
        })
    },[])

    return {
        loading,
        allBlogs
    }

}