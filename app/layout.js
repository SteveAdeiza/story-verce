export const metadata = {
  title: 'SteveDaniel-Episodes - Read Captivating Seasons',
  description: 'Free stories. 3 seasons. 15 episodes each.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0, background:'#0f0f0f', color:'#eee', fontFamily:'system-ui'}}>
        {children}
        
        <div style={{position:'fixed',bottom:20,right:20,display:'flex',gap:'12px',zIndex:999}}>
          <a href="https://www.facebook.com/profile.php?id=61581712769349" 
             target="_blank"
             style={{background:'#1877F2',color:'white',padding:'12px 16px',
             borderRadius:'50px',textDecoration:'none',fontWeight:'bold',
             boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
            Facebook
          </a>
          
          <a href="https://wa.me/2349013284422?text=Hello, I'm from SteveDaniel-Episodes" 
             style={{background:'#25D366',color:'white',padding:'12px 16px',
             borderRadius:'50px',textDecoration:'none',fontWeight:'bold',
             boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
            WhatsApp Me
          </a>
        </div>
      </body>
    </html>
  )
}
