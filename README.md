# Simple SvelteKit Blog App

## Overview

This is a simple SvelteKit blog application, which incorporates Firebase as a backend, and SCSS (Sass) for styles. The application provides an easy-to-use interface for creating, updating, and viewing blog posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Features

- Fully responsive design
- User authentication with Firebase
- CRUD (Create, Read, Update, Delete) operations for blog posts
- SCSS styling for flexible and DRY CSS
- Optimized for performance and maintainability

## Installation

Before you start, ensure you have Node.js and npm installed in your system. If not, you can download Node.js and npm [here](https://nodejs.org/en/download/).

### Steps:

1. Clone the repository
```
git clone https://github.com/JAsaxon/blogApp.git
```
2. Go to the project directory
```
cd blogApp
```
3. Install dependencies
```
npm install
```
4. Setup Firebase

- Go to [Firebase](https://firebase.google.com/), create a new project and get your configuration settings.
- go to `firebase.js`  and fill in your Firebase configuration details.

5. Run the application locally
```
npm run dev
```

## Usage

Once the application is running, navigate to `http://localhost:5173` in your browser. You'll be able to register as a new user, log in, create new blog posts, view existing posts, and update or delete your own posts.

## Support

If you encounter any problems or bugs, please open an issue [here](https://github.com/JAsaxon/blogApp/issues).

## Contributing

We are open to contributions. If you wish to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add a new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

Please make sure your commits are well-commented and your code follows the existing style for easier review.

---

**Note:** This is a basic implementation of a SvelteKit blog with Firebase as a backend. Feel free to enhance the application according to your needs.
