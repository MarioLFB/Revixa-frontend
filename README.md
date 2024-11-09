# Revixa
Developer: Mario Borges

![Mockup image](docs/amiresponsive_revixa.png)

[View live website](https://revixa-frontend-d26a64f75023.herokuapp.com/)

## Table of Contents
1. [About](#about)
2. [Project Goals](#project-goals)
3. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
4. [Technical Design](#technical-design)
    1. [Agile Design](#agile-design)
    2. [CRUD Functionality](#crud-functionality)
    3. [Colours](#colours)
    4. [Fonts](#fonts)
    5. [Wireframes](#wireframes)
5. [Technologies Used](#technologies-used)
6. [Front-End](#front-end)
7. [Back-End API](#back-end-api)
8. [Features](#features)
9. [Future Features / Improvements](#future-features--improvements)
10. [Validation](#validation)
11. [Testing](#testing)
12. [Bugs](#bugs)
13. [Deployment](#deployment)
14. [Credits](#credits)
15. [Acknowledgements](#acknowledgements)

## About

Revixa is a web app for discovering and sharing reviews of popular web development frameworks. It provides insights, comparisons, and user feedback on frameworks. Users can sign in to read in-depth posts, leave feedback, or share their own experiences.

## Project Goals

Revixa aims to build a community platform where developers can share and access valuable insights on web development frameworks. Key features include user registration, authentication, and CRUD functionality for reviews, comments and profiles.

Key functionality aspects:
- Simple, intuitive user interface
- User authentication
- Full CRUD (Create, Read, Update, Delete) for user accounts, comments, and reviews created by Admins
- Responsive design to ensure a smooth experience on mobile and desktop devices

## User Experience

### Target Audience

- Web developers and software engineers looking for insights on different web development frameworks.
- New developers seeking guidance on choosing the right technology for their projects.
- Experienced developers who want to share their knowledge, reviews, and experiences with specific frameworks.
- Tech enthusiasts interested in keeping up with the latest trends and tools in web development.

### User Requirements and Expectations

- An intuitive, easy-to-navigate interface that simplifies the process of browsing and contributing reviews.
- Clear and consistent responses for actions like registration, login, and posting reviews by Admins or comments.
- Visual feedback for actions such as submitting a review, leaving a comment, or updating a profile.
- Accessibility features to ensure inclusivity for users with various needs.
- Responsive design for an optimal experience on both mobile and desktop devices.
- Secure authentication and profile management to protect user data and enhance trust.

### User Stories

1. As a new user, I can register on Revixa to create an account and access the platform's features.
2. As a user, I can log in to access my profile and personalized content.
3. As a user, I can update my password to enhance security by providing my current and new password.
4. As a user, I can update my email to keep my contact information up-to-date.
5. As a user, I can use the navigation bar to access different sections (Login/Logout and User Area).
6. As a user, I can view the home page to understand Revixa's purpose and access login or registration options.
7. As a user, I can find reviews that match my interests.
8. As a user, I can comment on reviews to engage in discussions or share feedback.
9. As a user, I can like or unlike comments from other users to support helpful content.
10. As a user, I can see feedback when I have a successful or unsuccessful action.
11. As a user, I can access social media links in the footer to connect with Revixa externally.

### Admin Stories (Backend Only)

12. As an admin, I can create reviews to provide expert insights on specific frameworks.
13. As an admin, I can edit or delete reviews to manage the content on the platform.

### Site Owner Stories

14. As the site owner, I want to restrict features to logged-in users to maintain privacy.
15. As the site owner, I want the site to be fully responsive for a smooth experience on all devices.
16. As the site owner, I want a 404 error page for easy navigation if users encounter broken links.
17. As the site owner, I want the user to have a confirmation prompt when an important action is performed.

## Technical Design

### Agile Design

An agile approach was taken in developing this project, utilizing GitHub Projects to track User Stories and prioritize essential functionalities. Labels were used to categorize and guide development focus.

This agile methodology enabled the timely delivery of core functionalities for Revixa, with flexibility for future enhancements.

### CRUD Functionality

Revixa offers full CRUD functionality for user account management:

- **Create**: Users can register and create accounts, post comments on reviews, and give likes to comments. Admins can create new reviews.
- **Read**: Users can view their profile information, browse reviews, read comments, and see which comments they or others have liked.
- **Update**: Users can update their profile details, change their email and password, edit their comments, and toggle likes on other users’ comments. Admins can edit reviews as necessary.
- **Delete**: Users can remove their comments and unlike previously liked comments. Admins have the ability to delete reviews to maintain platform quality.

### Colours

The Revixa color palette includes shades of orange and white, providing a modern and pleasant visual experience.

<details>
<summary>Colours</summary>
<img src="docs/color_wheel.png">
</details>

### Fonts

The font Pacifico was used to ensure a clean and modern reading experience.

### Wireframes

Wireframes of the pages were created to guide the visual development of the project.

<details>
<summary>Login</summary>
<img src="docs\wireframes\loginpage.png">
<img src="docs\wireframes\login_mobile.png">
</details>

<details>
<summary>Register</summary>
<img src="docs\wireframes\registerpage.png">
<img src="docs\wireframes\register_mobile.png">
</details>

<details>
<summary>Home Not Login</summary>
<img src="docs\wireframes\homepage_notlogin.png">
<img src="docs\wireframes\homepage_notlogin_mobile.png">
</details>

<details>
<summary>Home Logged in</summary>
<img src="docs\wireframes\homepage_loggedin.png">
<img src="docs\wireframes\homepage_loggedin_mobile.png">
</details>

<details>
<summary>Dashboard</summary>
<img src="docs\wireframes\dashboard.png">
<img src="docs\wireframes\dashboard_mobile.png">
</details>

<details>
<summary>Post</summary>
<img src="docs\wireframes\postpage.png">
<img src="docs\wireframes\postpage_mobile.png">
</details>

<details>
<summary>Account Settings</summary>
<img src="docs\wireframes\accountsettings.png">
<img src="docs\wireframes\accountsettings_mobile.png">
</details>

<details>
<summary>Page 404</summary>
<img src="docs\wireframes\404page.png">
<img src="docs\wireframes\404page_mobile.png">
</details>

## Technologies Used

### Coding Languages

- HTML
- CSS
- JavaScript

### Frameworks and Tools

- [React](https://reactjs.org/) - Framework for building user interfaces
- [Bootstrap](https://getbootstrap.com/) - CSS framework for components and responsiveness
- [GitHub Projects](https://github.com/) - Used for agile project management and version control

### Libraries

- [Axios](https://axios-http.com/) - For making HTTP requests to interact with the backend API
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design and component styling
- [React-Bootstrap](https://react-bootstrap.github.io/) - Pre-built Bootstrap components for React
- [JWT Decode](https://www.npmjs.com/package/jwt-decode) - For decoding JSON Web Tokens, used in handling authentication
- [React Router DOM](https://reactrouter.com/) - For managing navigation and routing within the app
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Provides elegant notifications for user interactions
- [Styled Components](https://styled-components.com/) - For styling components with CSS-in-JS

### Dev Libraries

- [Vite](https://vitejs.dev/) - Fast build tool and development server, integrated with React for an optimized workflow
- [ESLint](https://eslint.org/) - For code linting and maintaining code quality
- [ESLint Plugin React](https://www.npmjs.com/package/eslint-plugin-react) - Extends ESLint with React-specific rules
- [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces React Hooks rules within ESLint
- [Styled Components](https://styled-components.com/) - For component-level styling with CSS-in-JS in a React environment
- [React Types](https://www.npmjs.com/package/@types/react) and [React DOM Types](https://www.npmjs.com/package/@types/react-dom) - TypeScript types for React and React DOM, useful for TypeScript projects

## Front-End

The front-end was built with React and Vite for optimized development. Modular components ensure efficiency, with React Bootstrap for styling and Styled Components for custom designs.


### Components and Their Use

#### `<Navbar />`
Provides primary navigation functionality for the site, allowing users to access different sections, including login, logout, and user areas.
**Used in User Stories:** 5

#### `<Footer />`
Contains social media links and additional site information.
**Used in User Stories:** 11

#### `<RegisterCTA />`
Prompts new users to register and directs them to the appropriate form.
**Used in User Stories:** 1, 6

#### `<PrimaryButton />`
A reusable component for consistent button styling across the application.

#### `<Post />`
Represents individual review posts, displaying content and interacting with user comments and likes.
**Used in User Stories:** 7, 8, 9

#### `<LikeButton />`
Allows users to like or unlike comments from other users.
**Used in User Stories:** 9

#### `<ReviewContent />`
Handles the display of detailed review content.
**Used in User Stories:** 7, 8

#### `<GlobalStyles />`
Manages global styling for consistent appearance across the application.

### Context

#### `AuthContext`
Manages user authentication state, providing context for login, registration, and logout functionalities.
**Used in User Stories:** 1, 2, 3, 14

### Pages

#### **Home Page** (`Home`)
Provides a landing page with information about Revixa, including calls to action for login or registration.
**Used in User Stories:** 6

#### **Register Page** (`Register`)
Allows new users to create accounts by providing their information.
**Used in User Stories:** 1

#### **Login Page** (`Login`)
Handles user login functionality, including form validation and error handling.
**Used in User Stories:** 2

#### **Dashboard Page** (`Dashboard`)
Provides personalized content for logged-in users, including profile and account settings access.
**Used in User Stories:** 2, 5

#### **AccountSettings Page** (`AccountSettings`)
Allows users to update their email, password, and other profile information.
**Used in User Stories:** 3, 4, 5, 12

#### **Page404** (`Page404`)
Displays a 404 error page for navigating users when encountering broken links.
**Used in User Stories:** 16

#### **Reviews Page** (`Reviews`)
Displays a list of reviews and individual review posts.
**Used in User Stories:** 7, 8

#### **ReviewPosts** (`ReviewPosts`)
Displays individual review details, including comments and likes.
**Used in User Stories:** 7, 8, 9

### Services

#### `api.js`
Serves as a base configuration for making HTTP requests to the backend API. It handles API initialization, common request settings, and error handling.
**Used in User Stories:** All relevant user interactions requiring data fetch or submission (e.g., 1, 2, 3, 4, 5, 7, 8, 9, etc.)

#### `auth.js`
Manages all authentication-related operations, including user login, registration, and token management.
**Used in User Stories:** 1, 2, 3, 14

#### `like.js`
Handles actions related to liking or unliking comments or reviews, providing methods for toggling the like status.
**Used in User Stories:** 9 (likes and unlikes on comments)

#### `posts.js`
Manages CRUD operations for posts, including fetching posts, creating new posts, updating existing ones, and deleting.
**Used in User Stories:** 7, 12, 13 (for admin actions)

#### `reviews.js`
Provides functions to handle operations specifically related to reviews, including fetching review details and other review-related tasks.
**Used in User Stories:** 7, 8, 12, 13 (admin tasks for reviews)

#### `user.js`
Handles user-related functions such as fetching user data, updating user information, and managing user profiles.
**Used in User Stories:** 4, 5 (profile and account management operations)


## Back-End API

The back-end API for Revixa’s front-end was built with the Django REST Framework, offering full support for account and profile management.
[here](https://github.com/MarioLFB/Revixa-backend)

## Features

- **Authentication**: Users can register, log in, and log out to securely access their accounts.
- Covered in user stories: 1, 2, 14
<details>
<summary>Register</summary>
<img src="docs\features\register.jpg">
</details>

<details>
<summary>Login</summary>
<img src="docs\features\login.jpg">
</details>

<details>
<summary>Log out</summary>
<img src="docs\features\logout.jpg">
</details>

- **Profile Management**: Users can update their profile information, change their email and password.
- Covered in user stories: 3, 4
<details>
<summary>Account Settings</summary>
<img src="docs\features\account_settings.jpg">
</details>

- **Review Access**: The Dashboard provides a streamlined overview of all available reviews, enabling users to quickly access detailed.
- Covered in user stories: 7, 12, 13
<details>
<summary>Dashboard</summary>
<img src="docs\features\dashboard.jpg">
</details>

- **Commenting and Likes**: Users can engage with reviews by posting comments,as well as editing and deleting them, liking other users' comments, and removing likes if desired.
- Covered in user stories: 8, 9
<details>
<summary>Posts</summary>
<img src="docs\features\posts.jpg">
</details>

- **Navigation**: A navigation bar, along with intuitive links, allows users to effortlessly explore different sections and areas of the site.
- Covered in user stories: 5, 6
<details>
<summary>Links and Navigation</summary>
<img src="docs\features\navigation.jpg">
</details>

- **Responsive Design**: Optimized for a smooth experience on various devices and desktop.
- Covered in user stories: 15
<details>
<summary>Responsive</summary>
<img src="docs\features\responsive.jpg">
</details>

- **Footer**: Provides social media links, contact information, and copyright details for easy access.
- Covered in user stories: 11
<details>
<summary>Footer</summary>
<img src="docs\features\footer.jpg">
</details>

- **User Feedback**: Provides feedback on user actions, indicating success or failure, and includes prompts to confirm important actions.
- Covered in user stories: 10, 17
<details>
<summary>Feedback</summary>
<img src="docs\features\feedback.jpg">
</details>

- **404 Error Page**: A custom 404 error page helps users navigate back to active areas of the site when encountering broken or nonexistent links.
- Covered in user stories: 16
<details>
<summary>404 Page</summary>
<img src="docs\features\page404.jpg">
</details>


## Future Features / Improvements

- **Password Recovery**: Allow users to recover their accounts by receiving a password reset link via email.
- **Social Authentication**: Enable users to log in with social media accounts like Google or LinkedIn.
- **Notifications**: Introduce notifications to keep users updated on relevant activity and engagement.
- **Enhanced Admin Tools**: Expand admin capabilities to improve monitoring and moderation of user-generated content.

## Validation

### HTML Validation

The W3C HTML Validator was used to validate the website’s HTML, with no errors detected.

<details>
<summary>Home</summary>
<img src="docs\validator w3\home_w3.jpg">
</details>

<details>
<summary>Login</summary>
<img src="docs\validator w3\login_w3.jpg">
</details>

<details>
<summary>Register</summary>
<img src="docs\validator w3\register_w3.jpg">
</details>

<details>
<summary>Dashboard</summary>
<img src="docs\validator w3\dashboard_w3.jpg">
</details>

<details>
<summary>Posts</summary>
<img src="docs\validator w3\posts_w3.jpg">
</details>

<details>
<summary>Account Settings</summary>
<img src="docs\validator w3\accountsettings_w3.jpg">
</details>

<details>
<summary>Page 404</summary>
<img src="docs\validator w3\page404_w3.jpg">
</details>

### CSS Validation

The W3C CSS Validator was used to validate the website’s CSS, with all files passing validation.
<details>
<summary>Account Settings</summary>
<img src="docs\jigsaw\accountsettings_jigsaw.jpg">
</details>

<details>
<summary>Footer</summary>
<img src="docs\jigsaw\footer_jigsaw.jpg">
</details>

<details>
<summary>Global Styles</summary>
<img src="docs\jigsaw\globalStyles_jigsaw.jpg">
</details>

<details>
<summary>Home</summary>
<img src="docs\jigsaw\home_jigsaw.jpg">
</details>

<details>
<summary>Like Button</summary>
<img src="docs\jigsaw\likeButton_jigsaw.jpg">
</details>

<details>
<summary>Login</summary>
<img src="docs\jigsaw\login_jigsaw.jpg">
</details>

<details>
<summary>Navbar</summary>
<img src="docs\jigsaw\navbar_jigsaw.jpg">
</details>

<details>
<summary>Page 404</summary>
<img src="docs\jigsaw\page404_jigsaw.jpg">
</details>

<details>
<summary>Post</summary>
<img src="docs\jigsaw\post_jigsaw.jpg">
</details>

<details>
<summary>Primary Button</summary>
<img src="docs\jigsaw\primarybutton_jigsaw.jpg">
</details>

<details>
<summary>Register</summary>
<img src="docs\jigsaw\register_jigsaw.jpg">
</details>

<details>
<summary>Register CTA</summary>
<img src="docs\jigsaw\registercta_jigsaw.jpg">
</details>

<details>
<summary>Review Content</summary>
<img src="docs\jigsaw\reviewcontent_jigsaw.jpg">
</details>

<details>
<summary>Review Posts</summary>
<img src="docs\jigsaw\reviewposts_jigsaw.jpg">
</details>

<details>
<summary>Review</summary>
<img src="docs\jigsaw\reviews_jigsaw.jpg">
</details>

### JavaScript Validation

Project was successfully validated using ESLint, confirming adherence to defined coding standards and ensuring consistency across JavaScript and JSX code.
<details>
<summary>Lint</summary>
<img src="docs\lint\lint_validation.jpg">
</details>

### Lighthouse and Accessibility Validation

#### Lighthouse:
<details>
<summary>Home Desktop</summary>
<img src="docs\lighthouse\home_desktop.jpg">
</details>

<details>
<summary>Home Mobile</summary>
<img src="docs\lighthouse\login_mobile.jpg">
</details>

<details>
<summary>Login Desktop</summary>
<img src="docs\lighthouse\login_desktop.jpg">
</details>

<details>
<summary>Login Mobile</summary>
<img src="docs\lighthouse\login_mobile.jpg">
</details>

<details>
<summary>Register Desktop</summary>
<img src="docs\lighthouse\register_desktop.jpg">
</details>

<details>
<summary>Register Mobile</summary>
<img src="docs\lighthouse\register_mobile.jpg">
</details>

<details>
<summary>Dashboard Desktop</summary>
<img src="docs\lighthouse\dashboard_desktop.jpg">
</details>

<details>
<summary>Dashboard Mobile</summary>
<img src="docs\lighthouse\dashboard_mobile.jpg">
</details>

<details>
<summary>Posts Desktop</summary>
<img src="docs\lighthouse\posts_desktop.jpg">
</details>

<details>
<summary>Posts Mobile</summary>
<img src="docs\lighthouse\posts_mobile.jpg">
</details>

<details>
<summary>Account Settings Desktop</summary>
<img src="docs\lighthouse\accountsettings_desktop.jpg">
</details>

<details>
<summary>Account Settings Mobile</summary>
<img src="docs\lighthouse\accountsettings_mobile.jpg">
</details>

<details>
<summary>Page 404 Desktop</summary>
<img src="docs\lighthouse\page404_desktop.jpg">
</details>

<details>
<summary>Page 404 Mobile</summary>
<img src="docs\lighthouse\page404_mobile.jpg">
</details>

#### Wave Validation:
<details>
<summary>Home</summary>
<img src="docs\wave_validation\home_wave.jpg">
</details>

<details>
<summary>Login</summary>
<img src="docs\wave_validation\login_wave.jpg">
</details>

<details>
<summary>Register</summary>
<img src="docs\wave_validation\register_wave.jpg">
</details>

<details>
<summary>Dashboard</summary>
<img src="docs\wave_validation\dashboard_wave.jpg">
</details>

<details>
<summary>Posts</summary>
<img src="docs\wave_validation\posts_wave.jpg">
</details>

<details>
<summary>Account Settings</summary>
<img src="docs\wave_validation\accountsettings_wave.jpg">
</details>

<details>
<summary>Page 404</summary>
<img src="docs\wave_validation\page404_wave.jpg">
</details>























## Testing

### Device Testing

The website was tested on various devices:
- Windows PC
- MacBook Pro
- iPhone and Android mobile devices

### Browser Compatibility

The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Safari

### Manual Testing

A detailed manual testing process was conducted to validate the functionality of each user story. See [Testing User Stories](#testing) for more information.

## Bugs

| Bug | Fix |
| --- | --- |
| Users able to like their own posts | Restricted users from liking their own posts by conditionally rendering `LikeButton` only for non-authored posts, using `AuthContext` to verify if the current user is the author. Ensures interaction accuracy by disabling self-likes. (Commit: 8294e67b32125b7ae34d9a547d05a1a33285b1a6) |
| Misaligned LikeButton and LikesCount in Post component | Fixed by grouping `LikeButton` and `LikesCount` within `LikeContainer`, improving alignment and spacing. (Commit: 8f55be899d7adb4bbb8a6cb4858f071f1cc0750b) |
| Incorrect navigation behavior of PrimaryButton | Fixed `PrimaryButton` to correctly use `react-router` `Link` for proper navigation behavior. (Commit: 7e79de89f12760a3da4ed935189998f89de285c8) |
| Liking posts with incorrect HTTP method | Changed `likePost` method from `GET` to `POST` for liking posts. (Commit: 2e7502ad2460cfa8450ad112df0038a240ddab40) |


## Deployment

### Heroku

This project was deployed to Heroku to enable continuous responsive testing. The deployment steps were as follows:
1. Create a Heroku app.
2. Set up required environment variables in Heroku.
3. Deploy via GitHub integration.

### Forking the GitHub Repository

To fork the GitHub repository:
1. Navigate to the [GitHub repository](https://github.com/MarioLFB/Revixa-frontend.git).
2. Click on "Fork" in the upper-right corner to create a copy on your account.

### Cloning the GitHub Repository

To clone the GitHub repository:
1. Navigate to the repository.
2. Click on "Code" and copy the repository URL.
3. Run `git clone <URL>` in your terminal.

## Credits

### Tutorials

- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

### Code

- Code Institute's Moments project was referenced for user authentication logic.

## Acknowledgements

- My mentor for guidance throughout the project.

[Back to Top](#revixa)