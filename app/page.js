import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding: '40px 20px', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{fontSize: '2.5rem', marginBottom: '10px'}}>StoryVerse</h1>
      <p style={{opacity: 0.7, marginBottom: '40px'}}>Mature stories by Mr. Steve The Phoenix</p>
      
      <Link href="/into-the-badlands/season-1/1" style={cardStyle}>
        <h2 style={{margin: 0}}>Into The Badlands</h2>
        <p style={{opacity: 0.7, margin: '8px 0 0 0'}}>3 Seasons • 45 Episodes • Start Reading →</p>
      </Link>
    </main>
  )
}

const cardStyle = {
  display: 'block',
  padding: '30px',
  background: '#1a1a1a',
  border: '1px solid #333',
  borderRadius: '12px',
  textDecoration: 'none',
  color: '#eee'
}
