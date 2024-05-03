import { Routes, Route, Navigate } from 'react-router-dom';
import { FriendsPage } from 'pages/FriendsPage';
import { AddPetsPage } from 'pages/AddPetsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { newsPage } from 'pages/NewsPage';
import { NoticePage } from 'pages/NoticePage';
import { ProfilePage } from 'pages/ProfilePage';
import { RegisterPage } from 'pages/RegisterPage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/news" element={<newsPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

// <Route
//   path="/login"
//   element={
//     <PrivateRoute><Favorite /></PrivateRoute>
//   }
// />
