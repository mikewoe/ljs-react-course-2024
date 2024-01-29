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