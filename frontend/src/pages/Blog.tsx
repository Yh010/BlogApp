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
        <div className="w-3/4 flex justify-center border  p-6">
          <div className="w-full space-y-6 text-center mt-8 ml-20 mr-14">
            <div className="text-5xl font-bold text-left">
              {singleBlog.title}
            </div>
            <div className="text-left font-extralight mt-3">
              Blog posted date
            </div>
            <div className="h-6 border-t border-b"></div>
            <div>{singleBlog?.content}</div>
          </div>
        </div>
        <div className="w-1/4 p-6">
          <div className="border-b-2 p-6">About the Author</div>
          <div className="flex mt-6">
            <div className="mr-6">
              <UserProfileIcon inputname="Authors Name" />
            </div>
            <div>
              <div className="font-medium">
                {singleBlog.author.name || "Anon"}
              </div>
              <div className="font-light">Author Desc</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
