import { BlogCard } from "../components/AllBlogsComponents/BlogCard";
import { useGetAllBlogs } from "../hooks/getAllBlogs";

export const AllBlogs = () => {
  const { loading, allBlogs } = useGetAllBlogs();
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="mt-4 flex justify-center">
        <div className="w-1/2">
          {allBlogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Author"}
              blogTitle={blog.title}
              blogDescr={blog.content}
              blogthumbnail={"thumbnail"}
              datePublished="16 Dec"
            />
          ))}
        </div>
      </div>
    );
  }
};
