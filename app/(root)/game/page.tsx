"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useCallback, useEffect, useState } from 'react'
import { TextRevealCardPreview } from '../components/CardReveal';
import { CardDemo } from '../components/CardDemo';
import { changeCard, checkDataFlipCard, fetchData, toggleCard } from '@/lib/utils';

const GamePage =() => {
  const { content, setContent } = usePageContext();
  const [apiData , setApiData] = useState(null);
  const [count , setCount] = useState(0);
  const [flipCard , setFlipCard] = useState(false);
  const truth = "truth";



  const getApiData = async () => {
    const info = await checkDataFlipCard();
    checkDataFlipCard();
    setApiData(info);  
  }

  const handleToggle = () => {
    toggleCard();
    setFlipCard(false);
  }
 
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
            {flipCard ? ( <button onClick={() => {
              handleToggle();
              setCount(count + 1)
            }} className='turn-over-button'>Done </button>)
            : (<div className="card-button">
              <button name='truth' onClick={() => {
                apiData? setFlipCard(true) : setFlipCard(false);
                getApiData()
                setCount(count + 1)
              }}>Truth</button>
              <button name='dare' onClick={() => {
                apiData? setFlipCard(true) : setFlipCard(false);
                getApiData()
                setCount(count + 1)
              }}>Dare</button>
            </div>)}
          </div>)
      }, [count])}
    </>
  )
}

export default GamePage
