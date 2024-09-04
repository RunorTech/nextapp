"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useEffect } from 'react'
import { TracingBeamDemo } from './components/TracingBeam';

const MoreReadBlog = () => {

  const { content, setContent } = usePageContext();
  return (
    <>
    {useEffect(() => {
        setContent(<div className="dashboard-body-more">
            <ScrollArea className="h-[100vh]">
               <TracingBeamDemo/>
            </ScrollArea>

        </div>)
    }, [])}
</>
  )
}

export default MoreReadBlog
