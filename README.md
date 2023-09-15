# Project Discussion

Features: 
- user purchased any course click on the select button.
- one user can't purchase a course more than once.
- No more than 20 hours of courses can be purchased at the same time.


How I managed the state in this project.

1. First I called the json file from fake data using useEffect. I saved the result from there into useState. The data stored in useState is displayed on the website through a loop.

2. When the user selects a course, the onclick function receives that data and puts it in the useState.
Since this data has to be shown in another component and that component is not its child, so I have declared useState in the component that has the common parent of these two components and then shared that data to other components through props.
