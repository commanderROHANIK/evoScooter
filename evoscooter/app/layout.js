import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from "./commonComponents/SessionProvider"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'evoScooter',
  description: 'Scooter rental app for evosoft employees',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
