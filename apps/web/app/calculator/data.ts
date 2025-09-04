export type DeliveryMode = "door" | "warehouse"; // до двери | до склада

export type Zone = 1 | 2 | 3;

// Тарифные таблицы: ключ — масса (кг), значение — цена в рублях
// До двери
const DOOR_1: Record<string, number> = {
  "0.1": 1225,
  "0.2": 1370,
  "0.3": 1435,
  "0.4": 1507,
  "0.5": 1580,
  "0.6": 1652,
  "0.7": 1725,
  "0.8": 1789,
  "0.9": 1862,
  "1": 1934,
  "2": 3143,
  "3": 4352,
  "4": 5642,
  "5": 6931,
  "6": 8221
};

const DOOR_2: Record<string, number> = {
  "0.1": 1290,
  "0.2": 1386,
  "0.3": 1467,
  "0.4": 1547,
  "0.5": 1628,
  "0.6": 1709,
  "0.7": 1789,
  "0.8": 1870,
  "0.9": 2015,
  "1": 2095,
  "2": 3627,
  "3": 5158,
  "4": 6609,
  "5": 8059,
  "6": 9510
};

const DOOR_3: Record<string, number> = {
  "0.1": 2498,
  "0.2": 2531,
  "0.3": 2547,
  "0.4": 2563,
  "0.5": 2579,
  "0.6": 2595,
  "0.7": 2611,
  "0.8": 2627,
  "0.9": 2644,
  "1": 2660,
  "2": 4352,
  "3": 5964,
  "4": 7495,
  "5": 9027,
  "6": 10558
};

// До склада
const WH_1: Record<string, number> = {
  "0.1": 1144,
  "0.2": 1290,
  "0.3": 1354,
  "0.4": 1427,
  "0.5": 1499,
  "0.6": 1572,
  "0.7": 1644,
  "0.8": 1709,
  "0.9": 1781,
  "1": 1854,
  "2": 3063,
  "3": 4272,
  "4": 5480,
  "5": 6689,
  "6": 7898
};

const WH_2: Record<string, number> = {
  "0.1": 1209,
  "0.2": 1306,
  "0.3": 1386,
  "0.4": 1467,
  "0.5": 1547,
  "0.6": 1628,
  "0.7": 1709,
  "0.8": 1789,
  "0.9": 1934,
  "1": 2015,
  "2": 3546,
  "3": 5077,
  "4": 6448,
  "5": 7818,
  "6": 9188
};

const WH_3: Record<string, number> = {
  "0.1": 2418,
  "0.2": 2450,
  "0.3": 2466,
  "0.4": 2482,
  "0.5": 2498,
  "0.6": 2515,
  "0.7": 2531,
  "0.8": 2547,
  "0.9": 2563,
  "1": 2579,
  "2": 4272,
  "3": 5883,
  "4": 7334,
  "5": 8785,
  "6": 10236
};

export const PRICING: Record<DeliveryMode, Record<Zone, Record<string, number>>> = {
  door: { 1: DOOR_1, 2: DOOR_2, 3: DOOR_3 },
  warehouse: { 1: WH_1, 2: WH_2, 3: WH_3 }
};

export const WEIGHT_STEPS_SMALL = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
export const WEIGHT_STEPS_BIG = [2, 3, 4, 5, 6];

export function ceilToBracket(kg: number): number | null {
  if (kg <= 0) return null;
  if (kg <= 1) {
    const rounded = Math.ceil(kg * 10) / 10;
    return Math.min(1, Math.max(0.1, Number(rounded.toFixed(1))));
  }
  if (kg <= 2) return 2;
  if (kg <= 3) return 3;
  if (kg <= 4) return 4;
  if (kg <= 5) return 5;
  if (kg <= 6) return 6;
  return null; // вне диапазона
}

export function formatRub(n: number): string {
  return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

