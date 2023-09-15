const CourseCart = ({ selectedCourse, totalHour, remainingHour }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl px-8">
        <p className=" pt-8 text-xl font-bold text-blue-500">
          Credit Hour Remaining {remainingHour} hr
        </p>
        <hr className="w-3/4 mx-auto my-4" />
        <h2 className="mb-3 text-xl font-bold ">Course Name</h2>
        <div className="card-body pt-0 px-0">
          {selectedCourse.map((course, idx) => (
          <div  key={course.id}>
            <p>
              {idx + 1} <span>{course.name}</span>
            </p>
            
          </div>
          ))}
          <div>
          <hr className="w-3/4 mx-auto my-4" />
             <h2 className="font-semibold">Total Credit Hour : {totalHour}</h2>
             <hr className="w-3/4 mx-auto my-4" />
             <h2 className="font-semibold">Total Price : 200 USD</h2>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default CourseCart;
