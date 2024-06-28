export const BlogItemSkeleton = () => {
  return (
    <div
      role="status"
      className="border-t-2 border-b-2 m-4 cursor-pointer animate-pulse"
    >
      <div className="flex space-x-2 justify items-center mt-6">
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"></div>
        <div className="h-4 bg-gray-200 rounded-full w-24"></div>
        <div className="h-4 bg-gray-200 rounded-full w-16"></div>
      </div>

      <div className="flex mt-4">
        <div className="w-3/4 space-y-2">
          <div className="h-6 bg-gray-200 rounded-full w-full"></div>
          <div className="h-4 bg-gray-200 rounded-full w-full"></div>
        </div>
        <div className="w-1/4 h-24 bg-gray-200 rounded-lg"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded-full w-20 mt-6 mb-6"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
