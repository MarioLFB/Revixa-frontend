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