import { defineStore } from 'pinia';
import axios from "axios";
import {Ref, ref} from "#app/compat/capi";
import {CardItemType} from "~/composables/types";
export const useCharacter = defineStore('character', ()=>{
    const characters:Ref<CardItemType[]> = ref([])
    const setData = (data: any[]) => {
        const returnedData: CardItemType[] = []
        data.map(item => returnedData.push({
            id: item.id,
            name: item.name,
            imageLink: item.image,
            species: item.species,
            location: item.location,
            episodes: item.episode.slice(0,5),
            status: item.status
        }))
        return returnedData
    }
    const fetchCharacters = async ()  => {
        const { data }: any = await axios.get('https://rickandmortyapi.com/api/character');
        const newData = setData(data.results)
        characters.value = newData
    }
    const getCharacterById = (id: number) => {
        const data = characters.value.filter(item => item.id === id)
        return data[0]
    }
    return {
        characters, fetchCharacters, getCharacterById
    }
});
