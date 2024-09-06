"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
//  h-[100vh] w-full
export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10]">
      <TextRevealCard
        text="hover here"
        revealText=" jump up five times "
      >
        <TextRevealCardTitle>
          Your Task : .
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Hover over the card to reveal the hidden text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
