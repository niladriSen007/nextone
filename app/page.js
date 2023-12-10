import ImageSlideshow from "@/components/images/ImageSlideshow";

export default function Home() {
  return (
    <main className="">
      <section className="flex items-start justify-between px-80 py-24">
        <div className=" w-1/2">
        <ImageSlideshow />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-400 text-7xl  bg-clip-text font-black">
            Next level burger for you
          </h1>
          <div className="flex items-center gap-5 my-6">
            <button className="px-4 py-1 rounded-md bg-gradient-to-r from-blue-400 font-black to-blue-600 border-2 border-blue-500 text-white">
              Browse our meals
            </button>
            <button className="px-4 py-1 rounded-md bg-transparent border-2 border-blue-500 text-white">
              Join to community
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
