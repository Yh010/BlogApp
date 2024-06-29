export const BlogSkeleton = () => {
  return (
    <div className="flex h-screen animate-pulse">
      <div className="w-3/4 flex justify-center border p-6">
        <div className="w-full space-y-6 text-center mt-8 ml-20 mr-14">
          <div className="h-12 bg-gray-200 rounded-full w-3/4 text-left"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/4 mt-3 text-left"></div>
          <div className="h-6 bg-gray-200 rounded-full w-full border-t border-b"></div>
          <div className="h-96 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
      <div className="w-1/4 p-6">
        <div className="h-6 bg-gray-200 rounded-full w-full border-b-2 p-6"></div>
        <div className="flex mt-6">
          <div className="mr-6 h-16 w-16 bg-gray-200 rounded-full"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded-full w-24"></div>
            <div className="h-4 bg-gray-200 rounded-full w-32 mt-2"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
