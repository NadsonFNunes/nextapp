import Navbar from "@components/Navbar"
import '@/styles/globals.css'

export const metadata = {
  title: '@contatinhos',
  description: 'Aplicativo em NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        
        <header>
          <h1>@contatinhos</h1>
          <Navbar />

        </header>

        <main>{children}</main>

        <footer>
          <p> Direitos autorais 2023</p>
        </footer>

      </body>
    </html>
  )
}
