export type TNRestaurant = {
    id: string,
    name: string,
    description: string,
    img: string,
    menu: string[],
    reviews: string[]
}

export type TNReview = {
    id: string,
    userId: string,
    text: string,
    rating: number
}

export type TNDish = {
    id: string,
    name: string,
    price: number,
    ingredients: string[]
}

export type TNUser = {
    id: string,
    name: string
}

export type TRestaurant = {
    id: string,
    name: string,
    menu: TDish[]
    reviews: TReview[]
}

export type TDish = {
    id: string,
    name: string,
    price: number,
    ingredients: string[]
}

export type TReview = {
    id: string;
    user: string;
    text: string;
    rating: number;
}