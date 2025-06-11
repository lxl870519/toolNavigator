'use client'

import { useEffect } from 'react'

export default function StagewiseWrapper() {
  useEffect(() => {
    // Temporarily disabled due to React compatibility issues
    // The stagewise toolbar has compatibility issues with React 18.3.1 and Next.js 14.2.28
    console.log('Stagewise toolbar temporarily disabled due to React compatibility issues')
    
    // TODO: Re-enable when stagewise releases a compatible version
    // or when we upgrade to a compatible React/Next.js version
  }, [])

  // Return null to prevent any rendering issues
  return null
} 