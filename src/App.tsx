/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CourseProvider, useCourse } from './context/CourseContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { GlossaryView } from './components/GlossaryView';
import { CertificateView } from './components/CertificateView';
import { SearchBarModal } from './components/SearchBarModal';
import { Toast } from './components/Toast';

const CourseApp: React.FC = () => {
  const { currentView, currentModuleId, modulesData, isRtl } = useCourse();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const activeModule = modulesData.find((m) => m.id === currentModuleId) || modulesData[0];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white"
    >
      {/* Top Navigation */}
      <Header
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Navigation Sidebar */}
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Content Viewport */}
        <main className="flex-1 min-w-0 pb-20">
          {currentView === 'module' && <ModuleView module={activeModule} />}
          {currentView === 'glossary' && <GlossaryView />}
          {currentView === 'certificate' && <CertificateView />}
        </main>
      </div>

      {/* Global Modals & Notifications */}
      <SearchBarModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <CourseProvider>
      <CourseApp />
    </CourseProvider>
  );
}
