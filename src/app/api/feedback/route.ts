
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, rating, message } = body

        // 1. Validate input
        if (!rating || !message) {
            return NextResponse.json(
                { error: 'Rating and message are required' },
                { status: 400 }
            )
        }

        // 2. Send to Google Sheets via Apps Script URL
        const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL

        if (!scriptUrl) {
            console.error('GOOGLE_SHEET_SCRIPT_URL is not defined')
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            )
        }

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'feedback',
                name: name || '-',
                email: email || '-',
                rating,
                message,
                timestamp: new Date().toISOString()
            }),
        })

        if (!response.ok) {
            throw new Error('Failed to submit to Google Sheets')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Feedback submission error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
