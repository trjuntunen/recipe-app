'use client';

import Header from '@/components/Header';
import WorkSection from '@/components/WorkSection';
import SkillsSection from '@/components/SkillsSection';
import ChatSection from '@/components/ChatSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <Header />

      {/* Work Section */}
      <WorkSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Chat Section */}
      <ChatSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
