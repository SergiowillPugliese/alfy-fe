import { DomainOptions } from "src/app/features/shared/model/domainOptions.model";

export const SUBMENU_ENVIRONMENT = {
    shoppingList: [
        new DomainOptions().withLabel('Lista della spesa').withLink('/shopping-list'),
        new DomainOptions().withLabel('Prodotti preferiti').withLink('/shopping-list/favorite-products'),
    ]
}