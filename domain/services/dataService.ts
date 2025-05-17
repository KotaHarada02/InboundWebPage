import restaurantData from '@/infrastructure/data/restaurant.json';
import historyData from '@/infrastructure/data/history.json';
import misoData from '@/infrastructure/data/miso.json';
import foodDrinksData from '@/infrastructure/data/foodDrinks.json';
import ramen from '@/infrastructure/data/menu/ramen.json';
import beer from '@/infrastructure/data/menu/beer.json';
import japaneseSake from '@/infrastructure/data/menu/japanese-sake.json';
import ippin from '@/infrastructure/data/menu/ippin.json';
import lunchSpecial from '@/infrastructure/data/menu/lunch-special.json';
import sunsetSpecial from '@/infrastructure/data/menu/sunset-special.json';
import dinnerSpecial from '@/infrastructure/data/menu/dinner-special.json';
import retailData from '@/infrastructure/data/retail.json';
import accessData from '@/infrastructure/data/access.json';
import {
  RestaurantInfo,
  HistoryEvent,
  MisoInfo,
  MisoType,
  FoodDrinkItem,
  MenuItem,
  RetailItem,
  AccessInfo
} from '../types';

export function getRestaurantInfo(): RestaurantInfo {
  return restaurantData;
}

export function getHistoryEvents(): HistoryEvent[] {
  return historyData;
}

export function getMisoInfo(): MisoInfo {
  return misoData;
}

export function getFoodDrinks(): FoodDrinkItem[] {
  return foodDrinksData as FoodDrinkItem[];
}

const menuData: MenuItem[] = [
  ...ramen,
  ...beer,
  ...japaneseSake,
  ...ippin,
  ...lunchSpecial,
  ...sunsetSpecial,
  ...dinnerSpecial,
];

export function getMenuItems(): MenuItem[] {
  return menuData;
}

export function getRetailItems(): RetailItem[] {
  return retailData;
}

export function getAccessInfo(): AccessInfo {
  return accessData;
} 