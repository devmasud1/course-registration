import { useEffect, useState } from "react";
import Course from "../Course/Course";
import CourseCart from "../CourseCart/CourseCart";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch("CoursesData.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleAddCourse = (course) => {
    const isSelected = selectedCourse.find((crs) => crs.id === course.id);
    if (isSelected) {
      return alert("already selected");
    }

    const newCourse = [...selectedCourse, course];
    setSelectedCourse(newCourse);
  };

  return (
    <div className="flex justify-between gap-10">
      <div className="w-full lg:w-3/4 ">
        {
          <div className="grid grid-cols-3">
            {course.map((course) => (
              <Course
                course={course}
                key={course.id}
                handleAddCourse={handleAddCourse}
              ></Course>
            ))}
          </div>
        }
      </div>

      <div className="w-full lg:w-1/4">
        <CourseCart selectedCourse={selectedCourse}></CourseCart>
      </div>
    </div>
  );
};

export default Courses;
