import { RouteObject } from 'react-router-dom';
import TermsPage from '../pages/TermsPage';
import FeedbackPage from '../pages/FeedbackPage';

export const supportRoutes: RouteObject = {
  path: 'support',
  children: [
    {
      path: 'terms',
      element: <TermsPage />,
    },
    {
      path: 'feedback',
      element: <FeedbackPage />,
    },
  ],
};
