export default function Home() {
  return (
    <main style={{padding:'40px 20px', maxWidth:'800px', margin:'0 auto'}}>
      <h1 style={{fontSize:'2.5rem', textAlign:'center', marginBottom:'10px'}}>
        Welcome to StoryVerse
      </h1>
      <p style={{textAlign:'center', opacity:0.7, marginBottom:'50px'}}>
        3 Seasons. 15 Episodes Each. All Free.
      </p>
      
      <div style={{display:'grid', gap:'20px'}}>
        <a href="/season-1" style={cardStyle}>
          <h2>Season 1: The Beginning →</h2>
          <p>Episodes 1-15. Where it all started.</p>
        </a>
        
        <a href="/season-2" style={cardStyle}>
          <h2>Season 2: The Conflict →</h2>
          <p>Episodes 1-15. Stakes get higher.</p>
        </a>
        
        <a href="/season-3" style={cardStyle}>
          <h2>Season 3: The Resolution →</h2>
          <p>Episodes 1-15. Final chapter.</p>
        </a>
      </div>
    </main>
  )
}

const cardStyle = {
  display:'block',
  padding:'24px',
  background:'#1a1a1a',
  border:'1px solid #333',
  borderRadius:'12px',
  textDecoration:'none',
  color:'#eee'
}
