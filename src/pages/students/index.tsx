import { useQueryHandler } from "../../hooks/useQueryHandler";

function Students() {
  const { data } = useQueryHandler({
    pathname: "students",
    url: "api/student/get-all-students",
  });
  console.log(data);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">Students list</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="py-3 font-semibold text-gray-700">Name</th>
            <th className="py-3 font-semibold text-gray-700">Surname</th>
            <th className="py-3 font-semibold text-gray-700">
              Studens' number
            </th>
            <th className="py-3 font-semibold text-gray-700">
              Number of groups
            </th>
            <th className="py-3 font-semibold text-gray-700">Status</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: any, index: number) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="py-3">{item.first_name}</td>
              <td className="py-3">{item.last_name}</td>
              <td className="py-3">{item.phone}</td>
              <td className="py-3">{item.groups?.length || 0}</td>
              <td className="py-3">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
