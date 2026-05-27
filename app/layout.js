export const metadata = {
  title: 'StoryVerse - Read Captivating Seasons',
  description: 'Free stories. 3 seasons. 15 episodes each.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, background:'#0f0f0f', color:'#eee', fontFamily:'system-ui'}}>
        {children}
        <a href="https://wa.me/2349013284422?text=Hello, I'm from StoryVerse" 
           style={{position:'fixed',bottom:20,right:20,background:'#25D366',color:'white',
           padding:'12px 16px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold'}}>
          WhatsApp Me
        </a>
      </body>
    </html>
  )
}
