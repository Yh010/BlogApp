import { BlogItemSkeleton } from "../components/AllBlogsComponents/AllBlogsSkeleton";
import { BlogCard } from "../components/AllBlogsComponents/BlogCard";
import { useGetAllBlogs } from "../hooks/getAllBlogs";

export const AllBlogs = () => {
  const { loading, allBlogs } = useGetAllBlogs();
  if (loading) {
    return (
      <div className="mt-4 flex justify-center bg-amber-50">
        <div className="w-1/2">
          <BlogItemSkeleton />
          <BlogItemSkeleton />
          <BlogItemSkeleton />
          <BlogItemSkeleton />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-4 flex justify-center bg-amber-50">
        <div className="w-1/2">
          {allBlogs.map((blog) => (
            <BlogCard
              id={blog.id}
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
