Developer: Mario Borges

![Mockup image]()

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

Revixa aims to build a community platform where developers can share and access valuable insights on web development frameworks. Key features include user registration, authentication, and full CRUD functionality for reviews, comments and profiles.

Key functionality aspects:
- Simple, intuitive user interface
- User authentication
- Full CRUD (Create, Read, Update, Delete) for user accounts
- Responsive design to ensure a smooth experience on mobile and desktop devices

## User Experience

### Target Audience

- Web developers and software engineers looking for insights on different web development frameworks.
- New developers seeking guidance on choosing the right technology for their projects.
- Experienced developers who want to share their knowledge, reviews, and experiences with specific frameworks.
- Tech enthusiasts interested in keeping up with the latest trends and tools in web development.

### User Requirements and Expectations

- An intuitive, easy-to-navigate interface that simplifies the process of browsing and contributing reviews.
- Clear and consistent responses for actions like registration, login, and posting reviews or comments.
- Visual feedback for actions such as submitting a review, leaving a comment, or updating a profile.
- Accessibility features to ensure inclusivity for users with various needs.
- Responsive design for an optimal experience on both mobile and desktop devices.
- Secure authentication and profile management to protect user data and enhance trust.

### User Stories

1. As a new user, I can register on Revixa to create an account and access the platform's features.
2. As a user, I can log in to access my profile and personalized content.
3. As a user, I can update my password to enhance security by providing my current and new password.
4. As a user, I can update my profile information to keep it current.
5. As a user, I can access my account settings to manage my email and password.
6. As a user, I can use the navigation bar to access different sections of the site easily.
7. As a user, I can view the home page to understand Revixa's purpose and access login or registration options.
8. As a user, I can find reviews that match my interests.
9. As a user, I can comment on reviews to engage in discussions or share feedback.
10. As a user, I can like or unlike comments from other users to support helpful content.
11. As a user, I can update my email address to keep my contact information current.
12. As a user, I can change my password to enhance my account security.
13. As a user, I can see feedback when I log in or out to confirm successful actions.
14. As a user, I can access social media links in the footer to connect with Revixa externally.

### Admin Stories (Backend Only)

15. As an admin, I can create reviews to provide expert insights on specific frameworks.
16. As an admin, I can edit or delete reviews to manage the content on the platform.

### Site Owner Stories

17. As the site owner, I want to restrict features to logged-in users to maintain privacy.
18. As the site owner, I want the site to be fully responsive for a smooth experience on all devices.
19. As the site owner, I want a 404 error page for easy navigation if users encounter broken links.

## Technical Design

### Agile Design

An agile approach was taken in developing this project, utilizing GitHub Projects to track User Stories and prioritize essential functionalities. Labels were used to categorize and guide development focus.

This agile methodology enabled the timely delivery of core functionalities for Revixa, with flexibility for future enhancements.

### CRUD Functionality

Revixa offers full CRUD functionality for user account management:

- **Create**: Users can register and create accounts, post comments on reviews, and give likes to comments. Admins can create new reviews.
- **Read**: Users can view their profile information, browse reviews, read comments, and see which comments they or others have liked.
- **Update**: Users can update their profile details, change their email and password, edit their comments, and toggle likes on other users’ comments. Admins can edit reviews as necessary.
- **Delete**: Users can delete their accounts, remove their comments, and unlike previously liked comments. Admins have the ability to delete reviews to maintain platform quality.

### Colours

The Revixa color palette includes shades of orange and white, providing a modern and pleasant visual experience.

<details>
<summary>Colours</summary>
<img src="..........png">
</details>

### Fonts

The font Pacifico was used to ensure a clean and modern reading experience.

### Wireframes

Wireframes of the pages were created to guide the visual development of the project.

<details>
<summary>Wireframes</summary>
<img src="..........png">
<img src=".............png">
<img src=".............png">
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


## Back-End API

The back-end API for Revixa’s front-end was built with the Django REST Framework, offering full support for account and profile management.

## Features

- **Authentication**: Users can register, log in, and log out to securely access their accounts.
- **Profile Management**: Users can update their profile information, change their email and password.
- **Commenting and Likes**: Users can engage with reviews by posting comments, liking other users' comments, and removing likes if desired.
- **Navigation**: An intuitive navigation bar allows users to explore different sections of the site with ease.
- **Responsive Design**: Optimized for a smooth experience on various devices, including mobile, tablet, and desktop.

## Future Features / Improvements

- **Password Recovery**: Allow users to recover their accounts by receiving a password reset link via email.
- **Social Authentication**: Enable users to log in with social media accounts like Google or LinkedIn.
- **Notifications**: Introduce notifications to keep users updated on relevant activity and engagement.
- **Enhanced Admin Tools**: Expand admin capabilities to improve monitoring and moderation of user-generated content.

## Validation

### HTML Validation

The W3C HTML Validator was used to validate the website’s HTML, with no errors detected.

### CSS Validation

The W3C CSS Validator was used to validate the website’s CSS, with all files passing validation.

### JavaScript Validation

ESLint was used to validate the JavaScript, ensuring code quality and adherence to standards.

### Accessibility Validation

Lighthouse and WAVE tools were used to evaluate the website’s accessibility, achieving high scores.

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
| Profile picture upload failed | Fixed by adjusting file handling permissions. |
| Registration form validation | Improved form validation rules to catch all errors. |
| Self-like on posts | Restricted users from liking their own posts by conditionally rendering the LikeButton only for non-authored posts, using AuthContext to verify if the current user is the author. Ensures interaction accuracy by disabling self-likes. |
| Like button misalignment | Fixed Post component layout by grouping LikeButton and LikesCount within LikeContainer, improving alignment and spacing. |
| Navigation issues with PrimaryButton | Updated PrimaryButton to use react-router Link for proper navigation behavior. |
| LikePost method | Changed likePost method from GET to POST for liking posts. |
