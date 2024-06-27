import { UserProfileIcon } from "../components/UserProfile/UserProfileIcon";
import { useGetSingleBlog } from "../hooks/getSingleBlog";
import { useParams } from "react-router-dom";
export const Blog = () => {
  const { id } = useParams();
  const { loading, singleBlog } = useGetSingleBlog({
    id: id || "",
  });
  if (!singleBlog) {
    return <div>loading</div>;
  }
  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="flex h-screen">
        <div className="w-3/4 border p-6">
          <div>{singleBlog.title}</div>
          <div>Blog posted date</div>
          <div>{singleBlog?.content}</div>
        </div>
        <div className="w-1/4 p-6">
          <div className="border-b-2">Author</div>
          <div className="flex">
            <div className="m-2">
              <UserProfileIcon inputname="Authors Name" />
            </div>
            <div>
              <div>{singleBlog.author.name || "Anon"}</div>
              <div>Author Desc</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
