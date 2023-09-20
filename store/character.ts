import { defineStore } from 'pinia';
import axios from "axios";
import {Ref, computed, ref} from "#app/compat/capi";
import {CardItemType, Episode} from "~/composables/types";
export const useCharacter = defineStore('character', ()=>{
    const characters:Ref<CardItemType[]> = ref([])
    const episode = ref()
    const actualChar = ref()
    const searchValue = ref('')
    const selectValue = ref('Alive')
    const page = ref(0)

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
            page.value += 1
            const {data}: any = await axios.get('https://rickandmortyapi.com/api/character',{
                params:{
                    page: page.value
                }});
            const newData = setAllCharactersData(data.results)
            characters.value = [...characters.value, ...newData]
        }catch (e) {
            console.log('ошибка fetchCharacters')
        }
    }
    const getCharacterById = async (id: number) => {
        try {
            const {data}: any = await axios.get('https://rickandmortyapi.com/api/character/' + id);
            actualChar.value = {
                id: data.id,
                name: data.name,
                imageLink: data.image,
                species: data.species,
                location: data.location,
                episodes: data.episode.slice(0,5),
                status: data.status
            }
        }catch (e) {
            console.log('ошибка fetchCharacters')
        }

    }

    const setActiveEpisode = (episodeParam: Episode) => {
        episode.value = {id: episodeParam.id, characters: episodeParam.characters, air_date: episodeParam.air_date,
        url: episodeParam.url, name: episodeParam.name}
    }

    const getFilterArray = async (name: string, selectOption: string) =>{
        try{
            const {data} = await axios.get('https://rickandmortyapi.com/api/character/', {
                params: {
                    name: name,
                    status: selectOption,
                }
            })
            characters.value =  setAllCharactersData(data.results)
            return characters.value

        }catch (e) {
            console.log('ошибка в getFilterArray')
        }
    }


    const addCharacters = async ()  => {
        try {
            page.value = page.value + 1
            const {data}: any = await axios.get('https://rickandmortyapi.com/api/character/',{
                params:{
                    page: page.value
                }});
            const newData = setAllCharactersData(data.results)
            characters.value = [...characters.value, ...newData]
        }catch (e) {
            console.log('ошибка fetchCharacters')
        }
    }
    return {
        characters, fetchCharacters, getCharacterById,
        episode, getEpisodeById, setActiveEpisode, actualChar, searchValue,
        selectValue, getFilterArray, page, addCharacters
    }
}, {persist: true});
