import { Slide } from "@mui/material";
import { useEffect, useState } from "react"
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { fetchNui } from "../../utils/fetchNui";
import { isEnvBrowser } from "../../utils/misc";
import './Phone.css';

export default function PhoneWrapper({ children }: any) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isEnvBrowser()) {
      setVisible(true);
    }

    const handleKeyEvent = (event: KeyboardEventInit) => {
      if (event.key === "Escape") {
        fetchNui('hud:phone:close');
        setVisible(false);
      }
    };

    window.addEventListener('keyup', handleKeyEvent);
  }, []);

  useNuiEvent<boolean>('hud:phone:toggle', (visible) => {
    setVisible(visible); 
  });

  return (
    <Slide direction='up' timeout={{ enter: 600, exit: 500 }} in={visible}>
      <div className="phone-wrapper">
        <div className="phone-container" style={{ backgroundImage: "url(media/frames/android.png)" }}>
          <div className="phone-background" style={{ backgroundColor: "rgb(255, 255, 200)" }}>
            {children}
          </div>
        </div>
      </div>
    </Slide>
  )
}