type Episode = {
    id: number,
    name: string,
    url: string,
}

type CharacterType = "Alien" | "Human" | string

export type CardItemType = {
    id: number,
    name: string,
    type: CharacterType,
    imageLink: string,
    episodes: string[],
}
