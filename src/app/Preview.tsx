import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'RIT ISE'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default function Image() {
    return new ImageResponse(
        (
        <div
            style={{
                fontSize: 128,
                background: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0047AB',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: 64, fontWeight: 'bold' }}>RIT ISE</div>
                <div style={{ fontSize: 32, marginTop: 20 }}>Bangalore</div>
            </div>
        </div>
        ),
        {
        ...size,
        }
    )
}