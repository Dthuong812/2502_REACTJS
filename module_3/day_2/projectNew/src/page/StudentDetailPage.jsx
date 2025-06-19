import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";

const StudentDetailPage = () => {
  const { id } = useParams();
  console.log(useParams());
  const student = data.find((s) => s.id === parseInt(id));

  if (!student) {
    return <p>Student not found!</p>;
  }

  const average = ((student.math + student.literature + student.english) / 3).toFixed(2);
  const grade =
    average >= 8
      ? "Excellent"
      : average >= 6.5
      ? "Good"
      : average >= 5
      ? "Average"
      : "Poor";

  return (
    <div className="w-full p-4">
      <h1 className="mb-4 text-2xl font-bold">Student Details</h1>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Math:</strong> {student.math}</p>
      <p><strong>Literature:</strong> {student.literature}</p>
      <p><strong>English:</strong> {student.english}</p>
      <p><strong>Average:</strong> {average}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
};

export default StudentDetailPage;