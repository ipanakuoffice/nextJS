import './globals.css'

export const metadata = {
  title: 'Digivo - Digitalnya UMKM',
  description: 'Generated by Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-900'>{children}</body>
    </html>
  )
}
