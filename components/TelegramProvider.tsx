'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Extend the WebApp type to include missing methods
interface ExtendedTelegramWebApp {
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
  };
  MainButton: {
    show: () => void;
    hide: () => void;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
  };
  expand: () => void;
  close: () => void;
  enableClosingConfirmation?: () => void; // optional
  setHeaderColor?: (color: string) => void;
  setBackgroundColor?: (color: string) => void;
  initDataUnsafe?: any;
}

interface TelegramContextType {
  webApp: ExtendedTelegramWebApp | null;
  user: any;
}

const TelegramContext = createContext<TelegramContextType>({
  webApp: null,
  user: null
});

interface TelegramProviderProps {
  children: ReactNode;
}

export function TelegramProvider({ children }: TelegramProviderProps) {
  const [webApp, setWebApp] = useState<ExtendedTelegramWebApp | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp as ExtendedTelegramWebApp;

      // Initialize
      tg.expand();
      tg.enableClosingConfirmation?.(); // optional chaining

      // Set theme if available
      tg.setHeaderColor?.('#1a1a1a');
      tg.setBackgroundColor?.('#1a1a1a');

      setWebApp(tg);
      setUser(tg.initDataUnsafe?.user);

      // Configure Main Button
      tg.MainButton.setText('PLAY NOW');
      tg.MainButton.show();

      // Handle back button
      tg.BackButton.onClick(() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          tg.close();
        }
      });

      console.log('Telegram Web App initialized:', tg.initDataUnsafe);
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ webApp, user }}>
      {children}
    </TelegramContext.Provider>
  );
}

export const useTelegram = () => useContext(TelegramContext);
