
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      elements: {
        
      }
    }}
    >
    <html lang="en">
      <body suppressHydrationWarning={true} >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
