import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";

const StudentsPage = () => {
  return (
    <div className="w-full p-4 ">
      <h1 className="mb-4 text-2xl font-bold">Students</h1>
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-2 border border-gray-300">
                <Link to={`/student/${student.id}`} className="text-blue-500 hover:underline">
                  {student.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;