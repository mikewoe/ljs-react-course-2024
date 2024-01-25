export type TRestaurant = {
    id: string,
    name: string,
    menu: TMenu[]
    reviews: TReview[]
}

export type TMenu = {
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