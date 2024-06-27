import { BlogCard } from "../components/AllBlogsComponents/BlogCard";
import { useGetAllBlogs } from "../hooks/getAllBlogs";

export const AllBlogs = () => {
  const { loading, blogs } = useGetAllBlogs();
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="mt-4 flex justify-center">
        <div className="">
          <BlogCard
            authorName={"author name"}
            blogTitle={"title"}
            blogDescr={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto necessitatibus, cumque adipisci quis, consequatur velit minima impedit voluptatibus quos expedita hic eveniet nulla eius exercitationem dicta facilis dolorum natus."
            }
            blogthumbnail={"thumbnail"}
            datePublished="16 Dec"
          />
          <BlogCard
            authorName={"author name"}
            blogTitle={"title"}
            blogDescr={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto necessitatibus, cumque adipisci quis, consequatur velit minima impedit voluptatibus quos expedita hic eveniet nulla eius exercitationem dicta facilis dolorum natus."
            }
            blogthumbnail={"thumbnail"}
            datePublished="16 Dec"
          />
          <BlogCard
            authorName={"author name"}
            blogTitle={"title"}
            blogDescr={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto necessitatibus, cumque adipisci quis, consequatur velit minima impedit voluptatibus quos expedita hic eveniet nulla eius exercitationem dicta facilis dolorum natus."
            }
            blogthumbnail={"thumbnail"}
            datePublished="16 Dec"
          />
        </div>
      </div>
    );
  }
};
