import { MenuItemFood } from "./menu-item-food";

export interface MenuFood {
    id: number;
    name: string;
    items: Array<MenuItemFood>;
}

export type MenusFood = Array<MenuFood>;