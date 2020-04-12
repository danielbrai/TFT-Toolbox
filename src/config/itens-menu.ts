import { ItemMenu } from './../app/shared/models/item-menu.model';
import { CONSTANTS } from './../app/shared/constants';
export const ITENS_MENU: ItemMenu[] = [
  {
    icone: CONSTANTS.iconsSettings.home.itens.name,
    titulo: 'Itens'
  },
  {
    icone: CONSTANTS.iconsSettings.home.champions.name,
    titulo: 'Campeões'
  },
  {
    icone: CONSTANTS.iconsSettings.home.formation.name,
    titulo: 'Composições'
  },
  {
    icone: CONSTANTS.iconsSettings.home.updates.name,
    titulo: 'Atualizações'
  },
  {
    icone: CONSTANTS.iconsSettings.home.statistics.name,
    titulo: 'Estatísticas'
  },
];
