import { RouteObject } from 'react-router-dom';
import APIKeysList from './APIKeys/pages/List';
import WebhooksList from './Webhooks/pages/List';
import GoogleWorkspaceList from './Google/pages/List';
import Microsoft365List from './Microsoft/pages/List';
import PaymentGatewayList from './PaymentGateway/pages/List';
import SMSProviderList from './SMS/pages/List';
import OAuthProviderList from './OAuth/pages/List';

export const integrationsRoutes: RouteObject[] = [
  { path: 'api-keys', element: <APIKeysList /> },
  { path: 'webhooks', element: <WebhooksList /> },
  { path: 'google', element: <GoogleWorkspaceList /> },
  { path: 'microsoft', element: <Microsoft365List /> },
  { path: 'payment-gateways', element: <PaymentGatewayList /> },
  { path: 'payments', element: <PaymentGatewayList /> },
  { path: 'sms', element: <SMSProviderList /> },
  { path: 'oauth', element: <OAuthProviderList /> },
];
