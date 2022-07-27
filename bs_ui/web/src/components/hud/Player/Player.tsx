import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import './Player.css'
import { faHeart, faShieldHalved, faBurger, faDroplet, faMicrophone, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useNuiEvent } from '../../../hooks/useNuiEvent';
import { useState } from 'react';

export default function Player({ voice, health, armor, hunger, thirst }: UI.Status.HudProps) {
  const [isTalking, setIsTalking] = useState(false);
  const [onRadio, setOnRadio] = useState(false);

  const thickSize = 6.5;
  const size = 53;
  const iconSize: SizeProp = "lg";

  const foregroundRed = (value: number, defaultColor: string) => {
    return (value > 30) ? defaultColor : 'rgba(255, 0, 0, 255)';
  }

  const backgroundRed = (value: number, defaultColor: string) => {
    return (value > 30) ? defaultColor : 'rgba(255, 0, 0, 0.5)';
  }

  const foregroundYellow = (defaultColor: string) => {
    return !isTalking ? defaultColor : 'rgba(255, 255, 0, 255)';
  }

  const backgroundYellow = (defaultColor: string) => {
    return !isTalking ? defaultColor : 'rgba(255, 255, 0, 0.5)';
  }

  useNuiEvent("hud:voip:toggleTalking", (state: boolean) => {
    setIsTalking(state);
  });

  useNuiEvent('hud:voip:toggleRadio', (state: boolean) => {
    setOnRadio(state);
  });

  return (
    <div className="hud-player">
      <Box sx={{ position: "relative", display: "flex" }}>
        <CircularProgress variant="determinate" value={voice} thickness={thickSize} size={size} className="foreground" sx={{ color: foregroundYellow("rgba(255,255,255,255)") }} />
        <div className="background" style={{ boxShadow: `0vh 0vh 0vh 0.75vh ${backgroundYellow("rgba(255,255,255,0.5)")}` }} />
        <FontAwesomeIcon className="hud-icon" icon={onRadio ? faHeadset : faMicrophone} size={iconSize} />
      </Box>

      <Box sx={{ position: "relative", display: "flex" }}>
        <CircularProgress variant="determinate" value={health} thickness={thickSize} size={size} className="foreground" sx={{ color: foregroundRed(health, "rgba(59,160,122,255)") }} />
        <div className="background" style={{ boxShadow: `0vh 0vh 0vh 0.75vh ${backgroundRed(health, "rgba(59,160,122,0.5)")}` }} />
        <FontAwesomeIcon className="hud-icon" icon={faHeart} size={iconSize} />
      </Box>

      <Box sx={{ position: "relative", display: "flex" }}>
        <CircularProgress variant="determinate" value={armor} thickness={thickSize} size={size} className="foreground" sx={{ color: foregroundRed(armor, "rgba(27,101,181,255)") }} />
        <div className="background" style={{ boxShadow: `0vh 0vh 0vh 0.75vh ${backgroundRed(armor, "rgba(27,101,181,0.5)")}` }} />
        <FontAwesomeIcon className="hud-icon" icon={faShieldHalved} size={iconSize} />
      </Box>

      <Box sx={{ position: "relative", display: "flex" }}>
        <CircularProgress variant="determinate" value={hunger} thickness={thickSize} size={size} className="foreground" sx={{ color: foregroundRed(hunger, "rgba(255,118,10,255)") }} />
        <div className="background" style={{ boxShadow: `0vh 0vh 0vh 0.75vh ${backgroundRed(hunger, "rgba(255,118,10,0.5)")}` }} />
        <FontAwesomeIcon className="hud-icon" icon={faBurger} size={iconSize} />
      </Box>

      <Box sx={{ position: "relative", display: "flex" }}>
        <CircularProgress variant="determinate" value={thirst} thickness={thickSize} size={size} className="foreground" sx={{ color: foregroundRed(thirst, "rgba(13,121,180,255)") }} />
        <div className="background" style={{ boxShadow: `0vh 0vh 0vh 0.75vh ${backgroundRed(thirst, "rgba(13,121,180,0.5)")}` }} />
        <FontAwesomeIcon className="hud-icon" icon={faDroplet} size={iconSize} />
      </Box>
    </div>
  )
}