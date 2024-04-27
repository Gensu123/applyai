// page.tsx
'use client'

import React, { useState } from 'react';
import Header from "./header";
import Sidebar from "./sidebar";
import DashboardContent from '../dashboard/(DashBoard-Pages)/DashboardContent'; // Correct the import paths
import JobRecommendationsContent from '../dashboard//(DashBoard-Pages)/JobRecommendationsContent'; // Correct the import paths
import ApplicationTrackingContent from '../dashboard/(DashBoard-Pages)/Application-TrackingContent'
import NotificationsContent from '../dashboard/(DashBoard-Pages)/Notifcations';
import ResourcesTipsContent from '../dashboard/(DashBoard-Pages)/Resources and Tips';
// Correct the import paths
; // Correct the import paths
type Content = 'dashboard' | 'job-recommendations' | 'application-tracking' | 'notifications' | 'resources-tips';

const Page: React.FC = () => {
  const [activeContent, setActiveContent] = useState<Content>('dashboard');

  let contentComponent;
  switch (activeContent) {
    case 'dashboard':
      contentComponent = <DashboardContent />;
      break;
    case 'job-recommendations':
      contentComponent = <JobRecommendationsContent />;
      break;
    case 'application-tracking':
      contentComponent = <ApplicationTrackingContent />;
      break;
    case 'notifications':
      contentComponent = <NotificationsContent />;
      break;
    case 'resources-tips':
      contentComponent = <ResourcesTipsContent />;
      break;
      
    default:
      contentComponent = <DashboardContent />;
      break;
  }

  return (
    <div className="app-container flex">
      <Sidebar setActiveContent={setActiveContent} />
      <div className="flex-1">
        <Header />
        {contentComponent}
      </div>
    </div>
  );
};

export default Page;
