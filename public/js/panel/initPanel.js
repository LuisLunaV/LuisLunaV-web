import { componentesCargados } from '../utils/loader.js';
import { panelEventClick } from './events/panelEventClick.js';
export const initPanel=()=>{
    componentesCargados();
    panelEventClick();
}