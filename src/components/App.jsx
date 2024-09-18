import { Routes, Route, Navigate } from 'react-router-dom';
import { FriendsPage } from 'pages/FriendsPage';
// import { AddPetsPage } from 'pages/AddPetsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { NewsPage } from 'pages/NewsPage';
import { NoticePage } from 'pages/NoticePage';
import { ProfilePage } from 'pages/ProfilePage';
import { RegisterPage } from 'pages/RegisterPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { usersCurrentThunk } from '../redux/Auth/authSlice';
import PrivateRoute from '../components/PrivateRout/PrivateRoute';
import Loader from './Loader/Loader';
import RestrictedRoute from './PrivateRout/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersCurrentThunk());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
       <Route path="/register" element={<RestrictedRoute><RegisterPage /></RestrictedRoute>} />
       <Route path="/login" element={ <RestrictedRoute><LoginPage /></RestrictedRoute>} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      </Routes>
      </Suspense>
  );
};

