'use client'

import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { utilityData } from "./UtilitiesList"
import Heading from "../Heading"

export default function UtilitiesPage() {
  return (
    <div className="min-h-[calc(100vh-4rem-4rem)] w-11/12 max-w-6xl mx-auto py-8">
      <Heading heading="Utilities"/>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {utilityData.map((utility) => (
          <Card key={utility.id} className="overflow-hidden bg-black hover:scale-105 duration-200">
            <CardHeader className="bg-primary/10">
              <CardTitle className="text-white">{utility.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 ">
              <p className="text-sm text-muted-foreground min-h-[60px]">
                {utility.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                asChild
              >
                <a 
                  href={utility.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {utility.buttonText || 'Visit Website'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
