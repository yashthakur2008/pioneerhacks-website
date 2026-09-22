import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'PioneerHacks VI | Cupertino High School Hackathon',
  description: 'PioneerHacks VI is a mid-October hackathon open to all high schoolers, organized by CES x TinoVation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${mono.variable}`}>{children}</body></html>;
}
