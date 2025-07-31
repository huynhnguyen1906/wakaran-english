'use client'

import { useEffect } from 'react'

import clarity from '@microsoft/clarity'

export default function ClarityAnalytics() {
    useEffect(() => {
        // Initialize Clarity
        clarity.init('sn9xfpgbm5')
    }, [])

    return null // No need to render anything
}
