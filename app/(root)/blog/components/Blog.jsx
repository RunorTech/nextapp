'use client'
import React, { useRef } from 'react';
import blogImage from '@/public/image/best20gifts.webp'
import Image from 'next/image'
import useScrollSpy from 'react-use-scrollspy';

const Blog = () => {

      const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
      ];

      const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -800,
      });

    return (
       <div className="blog-section">
         <div  ref={sectionRefs[0]} className={activeSection === 0 ? "blog-card blog-card--active" : "blog-card"}>
          <Image src={blogImage} height={200} width={260} alt='blog image' style={{backgroundSize: "contain"}} />
            <div className="blog-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit similique architecto dolorum vitae inventore nobis quis dignissimos voluptas labore amet, consequuntur at reiciendis perspiciatis possimus quae laborum, repellat voluptatum ad.
            </div>
        </div>
       </div>
    )
}

export default Blog
