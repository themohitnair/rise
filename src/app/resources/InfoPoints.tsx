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
        <Button onClick={() => setShowPoints(!showPoints)} aria-expanded={showPoints} aria-controls="points-section" className="flex items-center gap-2">
            <Info className="w-4" />
            <span>{showPoints ? "Hide Info" : "Learn More"}</span>
        </Button>
        <div id="points-section" className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${showPoints ? 'opacity-100' : 'opacity-0'}`} style={{ height: showPoints ? 'auto' : '0', }}>
            <Points prelim={prelim} points={points} />
        </div>
    </div>
  )
}