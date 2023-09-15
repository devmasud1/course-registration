import { useEffect, useState } from "react";
import Course from "../Course/Course";
import CourseCart from "../CourseCart/CourseCart";


const Courses = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20)

  useEffect(() => {
    fetch("CoursesData.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);


 

  const handleAddCourse = (course) => {
    const isSelected = selectedCourse.find((crs) => crs.id === course.id);

    let currentHours = course.credit;
    
    if (isSelected) {
      return alert("Already selected this course");
    }
    else{
      selectedCourse.forEach((cur) =>  currentHours = currentHours + cur.credit )
    }
    const totalRemaining = 20 - currentHours;

    if (currentHours > 20) {
      return alert('You cannot buy more than 20 hours')
    }
    else{

      setTotalHour(currentHours);
    
      setRemainingHour(totalRemaining)
  
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
        <CourseCart selectedCourse={selectedCourse} totalHour={totalHour} remainingHour={remainingHour}></CourseCart>
      </div>
    </div>
  );
};

export default Courses;
