import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(145deg, #041520 0%, #0A1F2E 50%, #EC4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFC107',
          fontWeight: 'bold',
          borderRadius: '20%',
        }}
      >
        TP
      </div>
    ),
    {
      ...size,
    }
  )
}
