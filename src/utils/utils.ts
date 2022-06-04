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