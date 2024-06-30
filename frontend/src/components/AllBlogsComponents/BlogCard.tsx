import { Link } from "react-router-dom";
import { getInitials } from "../UserProfile/hooks/getInitials";
import blogImage from "../../assets/website-blog.jpg";
interface BlogCardItems {
  authorName: string;
  blogTitle: string;
  blogDescr: string;
  /* blogthumbnail?: string; */
  datePublished: string;
  id: number;
}

export const BlogCard = ({
  authorName,
  blogTitle,
  blogDescr,
  /* blogthumbnail */
  datePublished,
  id,
}: BlogCardItems) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border border-black hover:border-b-8 hover:border-r-8 pt-2 pl-4 pr-4 pb-4 m-4 w-4/5 cursor-pointer bg-stone-50">
        <div className="flex space-x-2 justify items-center mt-1 ">
          <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {getInitials(authorName)}
            </span>
          </div>

          <div className="font-sans underline underline-offset-4">
            {authorName}
          </div>
          <div className="font-extralight">{datePublished}</div>
        </div>

        <div className="flex mt-4">
          <div className="w-3/4 space-y-2 pr-6 h-full">
            <div className="font-bold font-serif text-3xl ">{blogTitle}</div>
            <div
              className="font-light font-sans text-base h-full"
              style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
            >
              {blogDescr.length > 100
                ? blogDescr.slice(0, 200) + "..."
                : blogDescr}
            </div>
          </div>
          <div className="w-1/4 flex justify items-center">
            <img
              src={blogImage}
              alt="Blog Image"
              className="border-black border-2 shadow-lg  object-cover "
            />
          </div>
        </div>

        <div className="font-extralight mt-3">{`${Math.ceil(
          blogDescr.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};
