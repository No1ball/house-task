import { defineStore } from 'pinia';
import axios from "axios";
import {Ref, ref} from "#app/compat/capi";
import {CardItemType} from "~/composables/types";
export const useCharacter = defineStore('character', ()=>{
    const characters:Ref<CardItemType[]> = ref([])
    const setData = (data: any[]) => {
        const returnedData: CardItemType[] = []
        data.map(item => returnedData.push({id: item.id,
            name: item.name,
            imageLink: item.image,
            type: item.species,
            episodes: item.episode.slice(0,5)
        }))
        return returnedData
    }
    const fetchCharacters = async ()  => {
        const { data }: any = await axios.get('https://rickandmortyapi.com/api/character');
        const newData = setData(data.results)
        characters.value = newData
    }

    return {
        characters, fetchCharacters
    }
});
