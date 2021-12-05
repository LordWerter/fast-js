import { keyframes } from "@emotion/react";

export const topDown = keyframes({
   '0%': {
      top: '0',
      transform: 'rotate(0)',
   },
   '50%': {
      top: '11px',
      transform: 'rotate(0)',
   },
   '100%': {
      top: '17px',
      transform: 'rotate(135deg)',
   },
});

export const topUp = keyframes({
   '0%': {
      top: '17px',
      transform: 'rotate(135deg)',
   },
   '50%': {
      top: '11px',
      transform: 'rotate(0deg)',
   },
   '100%': {
      top: '0',
      transform: 'rotate(0deg)',
   },
});

export const zoomOut = keyframes({
   '50%': {
      transform: 'scale(0)',
   },
   '100%': {
      transform: 'scale(0)',
   },
});

export const zoomIn = keyframes({
   '0%': {
      transform: 'scale(0)',
   },
   '50%': {
      transform: 'scale(0)',
   },
   '100%': {
      transform: 'scale(1)',
   },
});

export const bottomUp = keyframes({
   '0%': {
      bottom: '0',
      transform: 'rotate(0)',
   },
   '50%': {
      bottom: '11px',
      transform: 'rotate(0)',
   },
   '100%': {
      bottom: '17px',
      transform: 'rotate(45deg)',
   },
});

export const bottomDown = keyframes({
   '0%': {
      bottom: '17px',
      transform: 'rotate(45deg)',
   },
   '50%': {
      bottom: '11px',
      transform: 'rotate(0)',
   },
   '100%': {
      bottom: '0',
      transform: 'rotate(0)',
   },
});