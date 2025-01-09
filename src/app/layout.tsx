// src/app/layout.tsx
import { Inter } from 'next/font/google'
import { Header, Footer } from './components/layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ServisLah - Smart Car Service, Peace of Mind',
  description: 'Book and track your car service in real-time with ServisLah',
  icons: {
    icon: '/serv.ico',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png',
    // Add other icons as needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  )
}