'use client'
import React, { useRef } from 'react';
import blogImage from '@/public/image/best20gifts.webp'
import Image from 'next/image'
import useScrollSpy from 'react-use-scrollspy';
import { StickyScrollRevealDemo } from './StickyScroll';



const Blog = () => {
    return (
     <>
     <StickyScrollRevealDemo/>
     </>
    )
}

export default Blog
