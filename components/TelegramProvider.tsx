// components/TelegramProvider.tsx
'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TelegramWebApp {
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
  enableClosingConfirmation: () => void;
}

interface TelegramContextType {
  webApp: TelegramWebApp | null;
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
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      
      // Initialize
      tg.expand();
      tg.enableClosingConfirmation();
      
      // Set theme if needed
      tg.setHeaderColor('#1a1a1a');
      tg.setBackgroundColor('#1a1a1a');

      const webAppObj: TelegramWebApp = {
        BackButton: tg.BackButton,
        MainButton: tg.MainButton,
        expand: tg.expand,
        close: tg.close,
        enableClosingConfirmation: tg.enableClosingConfirmation,
      };

      setWebApp(webAppObj);
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
