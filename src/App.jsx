import CourseCart from "./Components/CourseCart/CourseCart"
import Courses from "./Components/Courses/Courses"

function App() {


  return (
    <div className="container mx-auto">
      
     <div className="flex justify-between gap-10">
     <Courses></Courses>
      <CourseCart></CourseCart>
     </div>
    </div>
  )
}

export default App
