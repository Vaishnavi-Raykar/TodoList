
import './globals.css'
import { Header } from 'next/dist/lib/load-custom-routes'
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body suppressHydrationWarning>
       {children}</body>
    
    </html>
  )
}
