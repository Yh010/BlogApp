import { getInitials } from "../UserProfile/hooks/getInitials";

interface BlogCardItems {
  authorName: string;
  blogTitle: string;
  blogDescr: string;
  blogthumbnail?: string;
  datePublished: string;
}

export const BlogCard = ({
  authorName,
  blogTitle,
  blogDescr,
  blogthumbnail,
  datePublished,
}: BlogCardItems) => {
  return (
    <div className="border-t-2 border-b-2 m-4">
      <div className="flex space-x-2 justify items-center mt-6">
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {getInitials(authorName)}
          </span>
        </div>

        <div className="font-normal">{authorName}</div>
        <div className="font-extralight">{datePublished}</div>
      </div>

      <div className="flex mt-4">
        <div className="w-3/4 space-y-2">
          <div className="font-bold">{blogTitle}</div>
          <div className="font-light">
            {blogDescr.length > 100
              ? blogDescr.slice(0, 100) + "..."
              : blogDescr}
          </div>
        </div>
        <div className="w-1/4">{blogthumbnail}</div>
      </div>
      <div className="font-extralight mt-6 mb-6">{`${Math.ceil(
        blogDescr.length / 100
      )} min read`}</div>
    </div>
  );
};
