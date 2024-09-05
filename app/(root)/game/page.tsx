"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect } from 'react'
import { TextRevealCardPreview } from '../components/CardReveal';
import { CardDemo } from '../components/CardDemo';
import { changeCard } from '@/lib/utils';

const GamePage = () => {
  const { content, setContent } = usePageContext();
  changeCard();
  return (
    <>
      {useEffect(() => {
        setContent(
          <div className="dashboard-body-game">
            <div id='card' className="card ">
              <div className="cover ">
                <span className="card-front"><CardDemo /></span>
                <div className="card-back">
                  <a href="#"><TextRevealCardPreview /></a>
                </div>
              </div>
            </div>
            <div className="card-button">
              <button onClick={changeCard}>Truth</button>
              <button onClick={changeCard}>Dare</button>
            </div>
          </div>)
      }, [])}
    </>
  )
}

export default GamePage
