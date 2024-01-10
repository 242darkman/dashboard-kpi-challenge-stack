import { Inter } from 'next/font/google'
import Head from 'next/head'; 
import './globals.css';
import logo from '../assets/logo.png';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, logo }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo p-3">
            <Image src={logo} alt="My App Logo" />
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
  );
}

