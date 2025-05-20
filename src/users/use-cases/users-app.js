import { renderAddButton } from "../presentation/render-add-buttons/render-add-buttons";
import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderModal } from "../presentation/render-modal/render-modal";
import { renderTable } from "../presentation/render-table/render-table";
import usersStore from "../store/users.store";
import { saveUser } from "./save-user";

export const UserApp = async (element) => {
    // element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

    // console.log(usersStore.getUsers());

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userLike)=>{
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
}