import './globals.css'

export const metadata = {
  title: 'Hello world project',
  description: 'Your Vehicle\'s Silent Guardian — One Scan Away.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
