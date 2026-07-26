import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';

import LeadsPage from './Leads/pages/LeadsPage';
import LeadSourcesPage from './LeadSources/pages';
import LeadStatusesPage from './LeadStatuses/pages';
import LeadScoringPage from './LeadScoring/pages';

import CustomersPage from './Customers/pages/CustomersPage';
import ContactsPage from './Contacts/pages/ContactsPage';
import AccountsPage from './Accounts/pages';
import SegmentsPage from './Segments/pages';

import OpportunitiesPage from './Opportunities/pages/OpportunitiesPage';
import PipelinePage from './Pipeline/pages';
import ForecastsPage from './Forecasts/pages';
import QuotationsPage from './Quotations/pages';

import FollowUpsPage from './FollowUps/pages/FollowUpsPage';
import CommunicationsPage from './Communications/pages/CommunicationsPage';
import MeetingsPage from './Meetings/pages';
import EmailCampaignsPage from './EmailCampaigns/pages';

import TicketsPage from './Tickets/pages';
import SlaRulesPage from './SlaRules/pages';
import FeedbackPage from './Feedback/pages';

import LeadAnalyticsPage from './Analytics/LeadAnalyticsPage';
import SalesPerformancePage from './Analytics/SalesPerformancePage';
import CampaignRoiPage from './Analytics/CampaignRoiPage';

import GeneralSettingsPage from './Settings/GeneralSettingsPage';
import IntegrationsPage from './Settings/IntegrationsPage';
import WebFormsPage from './Settings/WebFormsPage';

export const crmRoutes: RouteObject[] = [
  {
    path: 'crm',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="leads" replace />,
      },
      { path: 'leads', element: <LeadsPage /> },
      { path: 'lead-sources', element: <LeadSourcesPage /> },
      { path: 'lead-statuses', element: <LeadStatusesPage /> },
      { path: 'lead-scoring', element: <LeadScoringPage /> },

      { path: 'customers', element: <CustomersPage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'accounts', element: <AccountsPage /> },
      { path: 'segments', element: <SegmentsPage /> },

      { path: 'opportunities', element: <OpportunitiesPage /> },
      { path: 'pipeline', element: <PipelinePage /> },
      { path: 'forecasts', element: <ForecastsPage /> },
      { path: 'quotations', element: <QuotationsPage /> },

      { path: 'follow-ups', element: <FollowUpsPage /> },
      { path: 'communications', element: <CommunicationsPage /> },
      { path: 'meetings', element: <MeetingsPage /> },
      { path: 'email-campaigns', element: <EmailCampaignsPage /> },

      { path: 'tickets', element: <TicketsPage /> },
      { path: 'sla-rules', element: <SlaRulesPage /> },
      { path: 'feedback', element: <FeedbackPage /> },

      { path: 'analytics/leads', element: <LeadAnalyticsPage /> },
      { path: 'analytics/sales', element: <SalesPerformancePage /> },
      { path: 'analytics/campaigns', element: <CampaignRoiPage /> },

      { path: 'settings/general', element: <GeneralSettingsPage /> },
      { path: 'settings/integrations', element: <IntegrationsPage /> },
      { path: 'settings/web-forms', element: <WebFormsPage /> },
    ]
  }
];
