import { useQueryHandler } from "../../hooks/useQueryHandler";

function Course() {
  const { data } = useQueryHandler({
    pathname: "courses",
    url: "api/course/get-courses",
  });

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-black-500 font-semibold text-xl mb-4">
                {item.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 font-medium">{item.duration}</p>
                <p className="text-gray-400 font-medium">15 students</p>
              </div>

              <p className="text-2xl font-bold text-orange-400">
                {Number(item.price).toLocaleString()} so'm
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
