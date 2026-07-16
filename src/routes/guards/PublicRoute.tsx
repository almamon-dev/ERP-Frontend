import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  // TODO: Zustand বা Context থেকে আসল লগইন স্টেট নিয়ে আসতে হবে
  const isAuthenticated = false; 

  if (isAuthenticated) {
    // লগইন করা থাকলে সরাসরি ড্যাশবোর্ডে পাঠিয়ে দেবে
    return <Navigate to="/web/s/I2HSLO4xu_2Dn0RxMwK2KB7JCS" replace />;
  }

  return <Outlet />;
}
