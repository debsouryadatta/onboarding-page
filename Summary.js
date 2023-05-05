// Frontend work
// * 1. Create react with vite
// * 2. Install tailwind css on react + vite
// * 3. Using tailwind onboarding components and sign in components
// * 4. Customising them as per preference
// * 5. Using dark mode in tailwind css
// * 6. Using useEffect hook to check for the system settings then and also adding the dark class to the index.html as per required
// * 7. Installing react icons for dark mode icons - Not required for onboarding page

// * 8. Creating the ui of admin panel
// * 9. Installing React File Base64 library for taking img as input to post it to mongoDb via express server


// Backend Work
// * 10. Working on the express server to take the post request sent from the onboarding page
// * 11. Creating model for the user, creating routes and controllers
// * 12. Need to install dotenv, mongoose and nodemon
// * 13. Creating the create user function in the controller
// * 14. Conecting the db to our app
// * 15. Creating error handler for handling the various mongo errors + other errors
// * 16. Creating the get users function in the controller
// * 17. Installing and adding cors for making api public


// Back to Frontend work
// * 18. Creating axios request for getting the data of users for displaying on the dashboard
// * 19. Creating axios request for posting the data of user from the onboarding page


// Back to Backend work
// * 20. Creating another mongoose model i.e Item for setting/updating the data of the onboarding page
// * 21. Creating the updateUser function in the controllers for updating the data to be shown in the onboarding page
// * 22. Creating the getInfo function in the controllers for geting the data for the onboarding page 


// Back to Frontend work
// * 23. Creating axios request for getting the data to be displayed on the onboarding page, i.e. the logo and the text on the button
// * 24. Creating axios request for updating the data to be displayed on the onboarding page, in Admin.jsx
// * 25. We have used react-file-base64 conversion for converting image to text format to store on mongodb
// * 26. The major problem that was arised during updating is that the file was was becoming more than the default so we changed the default setting to 50mb(Its done in the backend app.js file)
// * 27. Used useNavigate hook to navigate back to the onboarding page when we click the update button on dashboard