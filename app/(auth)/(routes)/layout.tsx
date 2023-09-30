export const metadata = {
    title: 'yamazon',
    description: 'Auth into yamazon',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="flex items-center justify-center mt-4">{children}</body>
      </html>
    )
  }
  

