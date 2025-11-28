'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Extended Telegram WebApp type
interface ExtendedTelegramWebApp {
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: () => void;
  };
  MainButton: {
    show: () => void;
    hide: () => void;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: () => void;
  };
  expand: () => void;
  close: () => void;
  enableClosingConfirmation?: () => void;
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
      const tg = window.Telegram.WebApp;

      // Initialize
      tg.expand();
      tg.enableClosingConfirmation?.();
      tg.setHeaderColor?.('#1a1a1a');
      tg.setBackgroundColor?.('#1a1a1a');

      // Wrap MainButton to match our type
      const mainButton = {
        show: tg.MainButton.show.bind(tg.MainButton),
        hide: tg.MainButton.hide.bind(tg.MainButton),
        setText: tg.MainButton.setText.bind(tg.MainButton),
        onClick: tg.MainButton.onClick.bind(tg.MainButton),
        offClick: tg.MainButton.offClick?.bind(tg.MainButton) || (() => {}),
      };

      // Wrap BackButton to match our type
      const backButton = {
        show: tg.BackButton.show.bind(tg.BackButton),
        hide: tg.BackButton.hide.bind(tg.BackButton),
        onClick: tg.BackButton.onClick.bind(tg.BackButton),
        offClick: tg.BackButton.offClick?.bind(tg.BackButton) || (() => {}),
      };

      const webAppObj: ExtendedTelegramWebApp = {
        MainButton: mainButton,
        BackButton: backButton,
        expand: tg.expand.bind(tg),
        close: tg.close.bind(tg),
        enableClosingConfirmation: tg.enableClosingConfirmation?.bind(tg),
        setHeaderColor: tg.setHeaderColor?.bind(tg),
        setBackgroundColor: tg.setBackgroundColor?.bind(tg),
        initDataUnsafe: tg.initDataUnsafe,
      };

      setWebApp(webAppObj);
      setUser(tg.initDataUnsafe?.user);

      // Configure Main Button
      webAppObj.MainButton.setText('PLAY NOW');
      webAppObj.MainButton.show();

      // Handle back button
      webAppObj.BackButton.onClick(() => {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          webAppObj.close();
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
