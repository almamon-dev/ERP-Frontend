import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  // TODO: Zustand বা Context থেকে আসল লগইন স্টেট নিয়ে আসতে হবে
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // লগইন করা না থাকলে লগইন পেজে পাঠিয়ে দেবে
    return <Navigate to="/web/login" replace />;
  }

  return <Outlet />;
}
