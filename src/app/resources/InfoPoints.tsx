'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Info } from 'lucide-react'
import Points from "./Points"

interface InfoPointsProps {
  prelim: string
  points: (string | React.ReactNode)[]
}

export default function InfoPoints({ prelim, points }: InfoPointsProps) {
  const [showPoints, setShowPoints] = useState(false)

  return (
    <div className="my-10">
      <Button
        onClick={() => setShowPoints(!showPoints)}
        aria-expanded={showPoints}
        aria-controls="points-section"
        className="flex items-center gap-2"
      >
        <Info className="h-4 w-4" />
        <span>{showPoints ? "Hide" : "Show"} Important Points</span>
      </Button>
      <div
        id="points-section"
        className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          showPoints ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Points prelim={prelim} points={points} />
      </div>
    </div>
  )
}