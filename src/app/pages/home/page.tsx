import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header, { HomepageHeader } from "@/app/components/header/page";
import Footer from "@/app/components/footer";
import Image from "next/image";
import "../../styles/Homepage.css";

const Page = () => {
  return (
    <div className="main">
      <HomepageHeader />
      <div className="content">
        <Image src="/book.jpg" width={270} height={300} alt="PD Logo" />
        <h1>
          Prodevans Technologies Pvt Ltd <br />
          <span>weekly demo</span> 
        </h1>
        <p className="par">
        Our weekly content demo isn’t just a showcase
          <br />it’s a collaborative opportunity to explore, learn, and grow together. Learn about different content formats, storytelling techniques,
          and audience engagement strategies.  
          <br /> This knowledge can be applied
          across departments to enhance communication and presentation skills.
        </p>
        <button className="cn">
          <a href="#">JOIN US</a>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
