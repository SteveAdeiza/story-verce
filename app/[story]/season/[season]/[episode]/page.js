import { stories } from '@/data/stories'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function EpisodePage({ params }) {
  const story = stories[params.story]
  const season = story?.seasons?.[params.season]
  const episode = season?.[params.episode]
  
  if (!story || !season || !episode) {
    notFound()
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link href={`/${params.story}`}>← Back to {story.title}</Link>
      
      <h1>Season {params.season}, Episode {params.episode}: {episode.title}</h1>
      <p><em>{episode.synopsis}</em></p>
      
      <h3>Cast:</h3>
      <ul>
        {episode.cast?.map(c => (
          <li key={c.character}>{c.character} - {c.actor}</li>
        ))}
      </ul>

      <hr />

      {episode.pages?.map(p => (
        <div key={p.page} style={{ marginBottom: '40px' }}>
          <h2>Page {p.page}</h2>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
            {p.content}
          </div>
        </div>
      ))}
      
      <Link href={`/${params.story}`}>← Back to Episodes</Link>
    </div>
  )
              }
