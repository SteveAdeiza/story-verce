import { stories } from '@/data/stories'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function StoryPage({ params }) {
  const storySlug = params.story
  const story = stories[storySlug]

  // If story doesn't exist in data/stories.js, show 404
  if (!story) {
    notFound()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#ededed',
      fontFamily: 'sans-serif',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <Link href="/" style={{
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '14px',
          display: 'inline-block',
          marginBottom: '20px'
        }}>
          ← Back to All Stories
        </Link>

        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '10px',
          borderBottom: '2px solid #333',
          paddingBottom: '10px'
        }}>
          {story.title}
        </h1>
        
        <p style={{ color: '#888', marginBottom: '40px' }}>
          {Object.keys(story.seasons).length} Seasons Available
        </p>

        {Object.entries(story.seasons).map(([seasonNum, episodes]) => (
          <div key={seasonNum} style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '1.8rem',
              marginBottom: '20px',
              color: '#fff'
            }}>
              Season {seasonNum}
            </h2>
            
            <div style={{
              display: 'grid',
              gap: '12px'
            }}>
              {Object.keys(episodes)
               .sort((a, b) => Number(a) - Number(b)) // Sort episodes 1,2,3...
               .map(episodeNum => (
                <Link 
                  key={episodeNum} 
                  href={`/${storySlug}/season-${seasonNum}/${episodeNum}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    padding: '16px 20px',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#222'
                    e.currentTarget.style.borderColor = '#0070f3'
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = '#1a1a1a'
                    e.currentTarget.style.borderColor = '#333'
                  }}
                  >
                    <span style={{ 
                      color: '#0070f3',
                      fontWeight: '600',
                      marginRight: '10px'
                    }}>
                      Episode {episodeNum}
                    </span>
                    <span style={{ color: '#ededed' }}>
                      {episodes[episodeNum].title || `Episode ${episodeNum}`}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

// Optional: Generate static pages for each story at build time
export async function generateStaticParams() {
  const { stories } = await import('@/data/stories')
  return Object.keys(stories).map((story) => ({
    story: story,
  }))
}
