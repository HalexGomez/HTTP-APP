import { showModal } from '../render-modal/render-modal.js';
import './render-add-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * 
 */
//@param {() => void} callback
// export const renderAddButton = (element, callback) => {
export const renderAddButton = (element) => {
    const floatButtton = document.createElement('button');
    floatButtton.innerText = '+';
    floatButtton.classList.add('fab-button');

    element.append(floatButtton);

    //TODO
    floatButtton.addEventListener('click', () => {
        // if (!callback) return;

        // callback();
        showModal();
    });
}