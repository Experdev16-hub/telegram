declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: any;
        version: string;
        platform: string;
        colorScheme: string;
        themeParams: {
          bg_color: string;
          text_color: string;
          hint_color: string;
          link_color: string;
          button_color: string;
          button_text_color: string;
        };
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        headerColor: string;
        backgroundColor: string;
        BackButton: {
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
        };
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          show: () => void;
          hide: () => void;
          enable: () => void;
          disable: () => void;
          onClick: (callback: () => void) => void;
        };
        expand: () => void;
        close: () => void;
      };
    };
  }
}

export {};
