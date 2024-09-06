"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponseTruth {
  // Define the structure of the response data here
  // For example:
  // data: string;
  id: number,
  question: string,
  type: string
}
interface ApiResponseDare {
  id: number,
  dare: string,
  type: string
}
export function TextRevealCardPreview( {content} : any) {
const  dare = content?.dare ;
const  type = content?.type ;
const truth = content?.question; 
const gameTask  = dare || truth;
  return (
    <div className="flex items-center justify-center bg-[#0E0E10]">
      <TextRevealCard
        text="hover here"
        revealText={gameTask} 
      >
        <TextRevealCardTitle>
          Your Task : {type}
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Hover over the card to reveal the hidden text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
