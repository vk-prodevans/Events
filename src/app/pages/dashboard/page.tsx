"use client"
import React, { useState } from 'react';
import Header from '@/app/components/header/page';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import AllDemo from '@/app/components/alldemo';
import Demo from '@/app/components/demo';
import Profile from '@/app/components/profile';

const Page = () => {
     const [selectedContent, setSelectedContent] = useState('main');

  const handleContentChange = (content:string) => {
    setSelectedContent(content);
  };
  return (
    <div>
      <div className="app">
      <Header />
      <div className="mainBody">
        <Navbar handleContentChange={handleContentChange} />
        <main className="main-content">
          {/* {selectedContent === 'main' && <h1>Welcome to the Main Page</h1>} */}
          {selectedContent === 'profile' && <Profile />}
          {selectedContent === 'all-demo' && <AllDemo />}
          {selectedContent === 'demo' && <Demo />}
        </main>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Page
