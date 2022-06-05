import { TIngredient } from "./type"

export const getResult = (arr: Array<string>) => {
    const result: { [key: string]: number } = {}

    arr.forEach((item) => {
        if (result[item] === undefined) {
            result[item] = 1
        } else {
            result[item] += 1
        }
    })
    return result
}
export const uniqueArray = (arr: Array<string>) => {
    return Array.from(new Set(arr));
}

export const countPrice = (arr: Array<string>, burgerIngredients: TIngredient[]) => {
    let cost = 0
    arr.forEach((id) => {
        const ingredient = burgerIngredients && burgerIngredients.find((item) => item._id === id)
        if (ingredient) {
            cost += ingredient.price
        }
    })
    return cost
}

export const changeDate = (date: string): string => {
    const orderDate = new Date(date).setHours(0, 0, 0, 0);
    const currentDate = new Date().setHours(0, 0, 0, 0);
    let day = new Date(orderDate).toLocaleDateString("ru-RU", {});
    if (orderDate === currentDate) {
      day = "Сегодня";
    } else if (currentDate - orderDate === 24 * 60 * 60 * 1000) {
      day = "Вчера";
    } 
    const time = new Date(date).toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    return `${day}, ${time}`;
  };