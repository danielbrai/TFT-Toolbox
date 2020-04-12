import { ItemMenu } from './../app/shared/models/item-menu.model';
import { CONSTANTS } from './../app/shared/constants';
export const ITENS_MENU_ITEM: ItemMenu[] = [
  {
    icone: CONSTANTS.iconsSettings.itensMenu.category.name,
    titulo: 'Por Categoria'
  },
  {
    icone: CONSTANTS.iconsSettings.itensMenu.recipes.name,
    titulo: 'Receitas'
  },

];
