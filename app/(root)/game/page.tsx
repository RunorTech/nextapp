"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect } from 'react'

const page = () => {
    const { content, setContent } = usePageContext();
  return (
    <>
      {useEffect(() => {
        setContent(<div className="dashboard-body">
          <ScrollArea className="h-[100vh] w-[100vw]">
            work in progress
          </ScrollArea>
        </div>)
      }, [])}
    </>
  )
}

export default page
