import Sidebar from "../components/sidebar/sidebar";

const Library = () => {
  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full items-center justify-center">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-3xl text-[#7573FF] font-bold">Coming Soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default Library;
