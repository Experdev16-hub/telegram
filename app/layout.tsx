

import type { Metadata } from 'next';
import { TelegramProvider } from '@/components/TelegramProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chance Game',
  description: 'Telegram Mini App - Spin and Win!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
      </head>
      <body className="bg-tg-bg text-white">
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
