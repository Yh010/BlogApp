import { CreatorSection } from "../components/AllBlogsComponents/AllBlogsCreatorSection";
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
      <div className="mt-4 flex justify-center bg-amber-100">
        <div className="w-3/4 flex justify-center">
          <div className="w-3/4">
            <div className="text-slate-950 text-3xl">
              All blogs at a glance...
            </div>
            {allBlogs.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Author"}
                blogTitle={blog.title}
                blogDescr={blog.content}
                /*  blogthumbnail={"thumbnail"} */
                datePublished="16 Dec"
              />
            ))}
          </div>
        </div>
        <div className="w-1/4 border-l-2 border-black">
          <CreatorSection />
        </div>
      </div>
    );
  }
};
