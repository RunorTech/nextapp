'use client'
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Blog from './components/Blog'
import { SidebarDemo } from '@/app/ui/SideBar'
import { usePageContext } from '@/app/pageContext'
import { NavbarDemo } from '@/app/ui/NavBar'

const BlogHomePage = () => {
    const { content , setContent} = usePageContext();

  
    return (
        <>
        { useEffect(() => {
        setContent( <div className="dashboard-body">
            <Blog/>
          </div>)
    },[])}
        </>
    )
}

export default BlogHomePage
