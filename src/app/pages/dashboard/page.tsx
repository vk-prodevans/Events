"use client"
import React, { useState } from 'react';
import Header from '@/app/components/header/page';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Demo from '@/app/components/demo';
import Profile from '@/app/components/profile';
import BookSlot from '@/app/components/bookslot';
import BookDemo from '@/app/components/bookdemo';
import AllDemo from '@/app/components/alldemo';
type PageContent = 'main' | 'profile' | 'all-demo' | 'demo';

const Page = () => {
  const [selectedContent, setSelectedContent] = useState<PageContent>('main');
  const [showDemoContent, setShowDemoContent] = useState<boolean>(false);
  const [showDemo, setShowDemo] = useState<boolean>(false);

  const handleContentChange = (content: PageContent) => {
    setSelectedContent(content);
  };

  const handleDemoSubmit = () => {
    setShowDemoContent(true);
  };
   const handleDemo = () => {
    setShowDemo(true);
  };

  return (
    <div>
      <div className="app">
        <Header />
        <div className="mainBody">
          <Navbar handleContentChange={handleContentChange} />
          <main className="main-content">
            {selectedContent === 'main' && <h1>Welcome to the Main Page</h1>}
            {selectedContent === 'profile' && <Profile />}
            {/* {selectedContent === 'all-demo' && <AllDemo />} */}
            {(selectedContent === 'demo' && !showDemoContent) && (
              <Demo onSubmit={handleDemoSubmit} />
            )}
            {showDemoContent &&!showDemo &&  (
            <BookSlot onBookDemoSubmit={handleDemo} />
          )}
          {showDemo &&  (
            <BookDemo />
            )}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;