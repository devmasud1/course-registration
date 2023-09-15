# Project Discussion

Features: 
- Clicking on the 'Select' button allows you to add any course.
- A user cannot add a course more than once.
- You cannot purchase more than 20 hours of courses at once.


How I managed the state in this project.

1. First I called the json file from fake data using useEffect. I saved the result from there into useState. The data stored in useState is displayed on the website through a loop.

2. When the user selects a course, the onclick function receives that data and puts it in the useState.
Since this data has to be shown in another component and that component is not its child, so I have declared useState in the component that has the common parent of these two components and then shared that data to other components through props.
