import { stories } from '../../../data/stories'
import { notFound } from 'next/navigation'

export default function EpisodePage({ params }) {
  const { story, season, episode } = params
  const storyData = stories[story]

  if (!storyData ||!storyData[`season${season}`] ||!storyData[`season${season}`][`episode${episode}`]) {
    return notFound()
  }

  const ep = storyData[`season${season}`][`episode${episode}`]

  return (
    <main style={{padding:'40px 20px', maxWidth:'800px', margin:'0 auto'}}>
      <a href="/" style={{color:'#25D366', textDecoration:'none'}}>← Back to Stories</a>
      <h1 style={{marginTop:'20px'}}>{storyData.title} - S{season} E{episode}</h1>
      <h2>{ep.title}</h2>
      <p style={{color:'#aaa', marginBottom:'30px'}}>by {storyData.author}</p>

      <div style={{whiteSpace:'pre-wrap', lineHeight:'1.8', fontSize:'18px'}}>
        {ep.content}
      </div>

      {ep.cast && (
        <div style={{marginTop:'50px', borderTop:'1px solid #333', paddingTop:'30px'}}>
          <h3>Cast</h3>
          {ep.cast.map((member, i) => (
            <p key={i}><strong>{member.character}</strong> - {member.actor}</p>
          ))}
        </div>
      )}
    </main>
  )
}
