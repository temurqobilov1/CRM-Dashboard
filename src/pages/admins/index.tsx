import { useState } from "react";
import { useQueryHandler } from "../../hooks/useQueryHandler";

function Admines() {
  const [status, setStatus] = useState("");

  const { data } = useQueryHandler({
    pathname: `admins-${status}`,
    url: "api/staff/all-admins",
    params: { status },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold">Admins list</h2>
        <div className="flex gap-2">
          <select
            name="admins"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className=" cursor-pointer border rounded pr-1"
          >
            <option value="">All</option>
            <option value="ishdan bo'shatilgan">Inactive</option>
            <option value="ta'tilda">Vacation</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="py-3 font-semibold text-gray-700">Name</th>
            <th className="py-3 font-semibold text-gray-700">Surname</th>
            <th className="py-3 font-semibold text-gray-700">Email</th>
            <th className="py-3 font-semibold text-gray-700">Jobs</th>
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
              <td className="py-3">{item.email}</td>
              <td className="py-3 capitalize">{item.role}</td>
              <td className="py-3">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admines;
