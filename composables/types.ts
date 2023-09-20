export type Episode = {
    id: number,
    name: string,
    url: string,
    air_date: string,
    characters: string[]
}

type CharacterType = "Alien" | "Human" | string
type StatusType = "Alive" | "Dead" | "unknown"
type LocationType = {
    name: string,
    url: string
}

export type CardItemType = {
    id: number,
    name: string,
    species : CharacterType,
    location: LocationType,
    imageLink: string,
    episodes: string[],
    status: StatusType
}
