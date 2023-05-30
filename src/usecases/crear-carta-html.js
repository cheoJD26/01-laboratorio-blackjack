import {divCartasJugadores} from '../index';

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */


export const crearCarta = ( carta, turno ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );

}