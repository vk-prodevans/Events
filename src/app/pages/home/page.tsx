import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header, { HomepageHeader } from "@/app/components/header/page";
import Footer from "@/app/components/footer";
import Image from "next/image";
import '../../styles/Homepage.css'

const Page = () => {
  return (
        <div className="main">
        <HomepageHeader/>
          <div className="content">
            <Image
              src="/book.jpg"
              width={270}
              height={300}
              alt="PD Logo"
            />
            <h1>
              Web Design & <br />
              <span>Development</span> <br />
              Course
            </h1>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              neque expedita atque eveniet
              <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad
              delectus
              <br /> a quae totam ipsa illum minus laudantium?
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
