"use client"
import { usePageContext } from '@/app/pageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TextRevealCardPreview } from '../components/CardReveal';
import { CardDemo } from '../components/CardDemo';
import { changeCard, checkDataFlipCard, fetchData, toggleCard } from '@/lib/utils';

const GamePage = () => {
  const { content, setContent } = usePageContext();
  const [apiData, setApiData] = useState(null);
  const [count, setCount] = useState(0);
  const [flipCard, setFlipCard] = useState(false);
  // const truth = "truth";
  // const buttonRef = useRef(null);

  useEffect ( () => {
    onstart();
  },[])

  const onstart = async () => {
    const info = await fetchData();
    setApiData(info);
  }

  const getApiData = async (task : string) => {
    const info = await checkDataFlipCard(task);
    setApiData(info);
  }

  const handleToggle = () => {
    toggleCard();
    setFlipCard(false);
    setCount(count + 1);
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
                  <a href="#"><TextRevealCardPreview content={apiData} /></a>
                </div>
              </div>
            </div>
            {apiData ? (<>
              {flipCard ? (<button onClick={() => {
                handleToggle();
              }} className='turn-over-button'>Done </button>)
                : (<div className="card-button">
                  <button  onClick={() => {
                    getApiData("/truth/random")
                    apiData ? setFlipCard(true) : alert("Server is temporarily down please try again in 30sec");
                    setCount(count + 1)
                  }}>Truth</button>
                  <button  onClick={() => {
                    getApiData("/dare/random")
                    apiData ? setFlipCard(true) : alert("Server is temporarily down please try again in 30sec");
                    setCount(count + 1)
                  }}>Dare</button>
                </div>)}
            </>) : (<button onClick={() => {
              onstart();
              setCount(count + 1);
            }} className='turn-over-button'>SART</button>)}
          </div>)
      }, [count])}
    </>
  )
}

export default GamePage
