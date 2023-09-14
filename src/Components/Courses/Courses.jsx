import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("CoursesData.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="w-full lg:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {course.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
