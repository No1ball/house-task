import { defineStore } from 'pinia';
import axios from "axios";
import {Ref, computed, ref} from "#app/compat/capi";
import {CardItemType, Episode} from "~/composables/types";
export const useCharacter = defineStore('character', ()=>{
    const characters:Ref<CardItemType[]> = ref([])
    const episode: Ref<Episode> = ref()

    const getEpisodeById = async (id: number) =>{
        try {
            const {data} = await axios.get('https://rickandmortyapi.com/api/episode/' + id)
            episode.value = data
        }catch (e) {
            console.log('Ошибка в getEpisodeById')
        }
    }

    const setAllCharactersData = (data: any[]) => {
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
        try {
            const {data}: any = await axios.get('https://rickandmortyapi.com/api/character');
            const newData = setAllCharactersData(data.results)
            characters.value = newData
        }catch (e) {
            console.log('ошибка fetchCharacters')
        }
    }
    const getCharacterById = (id: number) =>
        characters.value.filter(item => item.id === id)[0]

    const setActiveEpisode = (episodeParam: Episode) => {
        episode.value = episodeParam
    }
    return {
        characters, fetchCharacters, getCharacterById,
        episode, getEpisodeById, setActiveEpisode,
    }
});
