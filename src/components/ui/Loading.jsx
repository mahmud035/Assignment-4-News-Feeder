const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-167px)] -mt-20 mx-auto  w-96 ">
      <p className="p-8 text-3xl text-center text-black bg-gray-200 rounded-md ">
        Fetching News Data...
      </p>
    </div>
  );
};

export default Loading;
