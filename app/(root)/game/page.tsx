"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect } from 'react'
import { TextRevealCardPreview } from '../components/CardReveal';
import { CardDemo } from '../components/CardDemo';

const GamePage = () => {
    const { content, setContent } = usePageContext();
  return (
    <>
      {useEffect(() => {
        setContent(
        <div className="dashboard-body">
         {/* <TextRevealCardPreview/> */}
         <CardDemo/>
        </div>)
      }, [])}
    </>
  )
}

export default GamePage
