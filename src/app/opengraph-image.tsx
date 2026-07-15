import { ImageResponse } from 'next/og';

export const alt = 'NFCtron — events, tickets and payments';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, color: 'white', background: 'linear-gradient(135deg,#0e1c69 0%,#28156f 58%,#5136c7 100%)', fontFamily: 'Arial, sans-serif' }}>
    <div style={{ display: 'flex', fontSize: 54, fontWeight: 700, letterSpacing: -2 }}>NFC<span style={{ fontWeight: 400 }}>tron</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 900 }}><div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>To nejlepší se děje právě teď.</div><div style={{ marginTop: 28, fontSize: 28, color: 'rgba(255,255,255,.72)' }}>Akce · vstupenky · pohodlné placení</div></div>
  </div>, size);
}
