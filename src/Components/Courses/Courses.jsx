import { useEffect, useState } from "react";
import Course from "../Course/Course";
import CourseCart from "../CourseCart/CourseCart";
import swal from "sweetalert";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  useEffect(() => {
    fetch("CoursesData.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  const handleAddCourse = (course) => {
    const isSelected = selectedCourse.find((crs) => crs.id === course.id);

    let currentHours = course.credit;
    let currentCost = course.price;

    if (isSelected) {
      return swal({
        title: "Already select this course",
        text: "You may not purchase a course more than once",
        icon: "success",
        dangerMode: true,
      });
    } else {
      selectedCourse.forEach((cur) => {
        currentHours = currentHours + cur.credit;
        currentCost = currentCost + cur.price;
      });
    }
    const totalRemaining = 20 - currentHours;

    if (currentHours > 20) {
      return swal({
        title: "Your remaining hours 0",
        text: "You cannot purchase more than 20 hours of courses",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      setTotalHour(currentHours);
      setRemainingHour(totalRemaining);
      setTotalCost(currentCost);

      const newCourse = [...selectedCourse, course];
      setSelectedCourse(newCourse);
    }
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
        <CourseCart
          selectedCourse={selectedCourse}
          totalHour={totalHour}
          remainingHour={remainingHour}
          totalCost={totalCost}
        ></CourseCart>
      </div>
    </div>
  );
};

export default Courses;
