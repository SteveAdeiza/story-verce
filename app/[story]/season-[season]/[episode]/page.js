import { stories } from '../../../../data/stories'
import { notFound } from 'next/navigation'

export default function EpisodePage({ params }) {
  const { story, season, episode } = params
  const storyData = stories[story]
  
  if (!storyData ||!storyData[`season${season}`] ||!storyData[`season${season}`][`episode${episode}`]) {
    return notFound()
  }

  const ep = storyData[`season${season}`][`episode${episode}`]
  
  return (
    <main style={{padding:'40px 20px', maxWidth:'800px', margin:'0 auto', lineHeight:1.8}}>
      <a href="/" style={{color:'#25D366', textDecoration:'none'}}>← Back Home</a>
      
      <h1 style={{fontSize:'2rem', marginTop:'30px', marginBottom:'5px'}}>
        {storyData.title}
      </h1>
      <h2 style={{fontSize:'1.3rem', opacity:0.8, marginBottom:'10px'}}>
        Season {season} • Episode {episode}: {ep.title}
      </h2>
      <p style={{opacity:0.6, marginBottom:'40px', fontStyle:'italic'}}>
        Written by {storyData.author}
      </p>
      
      <div style={{whiteSpace:'pre-wrap', fontSize:'1.1rem', marginBottom:'60px'}}>
        {ep.content}
      </div>
      
      <div style={{borderTop:'1px solid #333', paddingTop:'30px'}}>
        <h3 style={{marginBottom:'15px'}}>Cast</h3>
        {ep.cast.map((actor, i) => (
          <p key={i} style={{margin:'8px 0', opacity:0.9}}>
            <strong>{actor.character}</strong> — {actor.actor}
          </p>
        ))}
      </div>
    </main>
  )
}
