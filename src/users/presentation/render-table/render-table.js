import usersStore from '../../store/users.store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';


let tableG;


const createTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');

    tableHeader.innerHTML = `
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>ctions</th>
    </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeader, tableBody);

    return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');

    if (!element) return;

    const id = element.getAttribute('data-id');
    showModal(id);
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');

    if (!element) return;

    const id = element.getAttribute('data-id');

    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable()

    } catch (error) {
        alert(error);
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {


    const users = usersStore.getUsers();

    if (!tableG) {
        tableG = createTable();

        element.append(tableG);

        //TODO listeners a la tabla
        tableG.addEventListener('click', tableSelectListener)
        tableG.addEventListener('click', tableDeleteListener)
    }

    let tableHTML = '';

    users.forEach(user => {
        tableHTML += `
         <tr>
            <td>${user.id}</td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>

            <td>
                <a href="#/" class="select-user" data-id=${user.id}>Select<a/>
                <a href="#/" class="delete-user" data-id=${user.id}>Delete<a/>
            </td>
        </tr>
        `;
    });

    tableG.querySelector('tbody').innerHTML = tableHTML;

}

