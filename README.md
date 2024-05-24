# PetLove

PetLove is a web application designed to connect pet lovers with their favorite
pets. Users can browse, favorite, and adopt pets through the platform.

## Features

- **User Authentication:** Secure user registration and login.
- **Pet Browsing:** Browse pets available for adoption with detailed
  information.
- **Favorites:** Add pets to your favorites list.
- **Profile Management:** Manage user profiles and view favorite pets.
- **Responsive Design:** Optimized for desktop, tablet, and mobile views.

## Technologies

### Frontend

- React
- Redux
- Formik
- Yup
- Styled-Components

### Backend

- Node.js
- Express

### Database

- MongoDB

### Authentication

- JSON Web Tokens (JWT)

### Other Tools

- Axios
- React Router

## Usage

1. Register a new user or log in with existing credentials.
2. Browse available pets and add them to your favorites.
3. View and manage your profile and favorite pets.

## API Endpoints

### Authentication

- `POST /api/users/signup`: Register a new user.
- `POST /api/users/signin`: Log in an existing user.

### Users

- `GET /api/users/current/full`: Get current user full details.
- `PATCH /api/users/current/edit`: Update user profile details.

### Pets

- `GET /api/notices`: Get a list of available pets.
- `GET /api/notices/:id`: Get details of a specific pet.
- `POST /api/notices/favorites/add/{id}`: Add a pet to favorites.
- `DELETE /api/notices/favorites/remove/{id}`: Remove a pet from favorites.

## Contributing

Contributions are what make the open-source community such an amazing place to
learn, inspire, and create. Any contributions you make are greatly appreciated.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

- Your Name: Daryna Holikova
- Email: dgolikova0@gmail.com
- Project Link: [PetLove Project](https://darynna.github.io/petlove-project/)
