'use client'
import React, { useEffect } from 'react'
import Blog from './components/Blog'
import { usePageContext } from '@/app/pageContext'
import { ScrollArea } from '@/components/ui/scroll-area'

const BlogHomePage = () => {
    const { content, setContent } = usePageContext();


    return (
        <>
            {useEffect(() => {
                setContent(<div className="dashboard-body">
                    <ScrollArea className="h-[100vh]">
                        <Blog />
                    </ScrollArea>

                </div>)
            }, [])}
        </>
    )
}

export default BlogHomePage
