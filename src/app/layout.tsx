import './style.css'

export const metadata = {
  title: 'HackMD To PDF',
}

export default function RootLayout({ children, error }: { children: React.ReactNode; error: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' />
      </head>
      <body>{children}</body>
    </html>
  )
}
