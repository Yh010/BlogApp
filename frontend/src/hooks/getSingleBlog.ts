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
export const useGetSingleBlog = ({ id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [singleBlog, setsingleBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        }).then(response => {
            setsingleBlog(response.data.blog);
            setLoading(false)
            
        })
    },[id])

    return {
        loading,
        singleBlog
    }

}