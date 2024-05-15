import { useEffect, useState } from "react"
import { db } from "../data/db"
import { CardItem } from "../types"

export const useCards = () => {

    const initialCards = () : CardItem[] => {
        const localStorageCards = localStorage.getItem('cards');
        const cards = localStorageCards ? JSON.parse(localStorageCards) : [];
        return cards.length > 0 ? cards : db;
    }

    const [data, setData] = useState(initialCards)

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(data))
    }, [data])

    const selectCard = (card: CardItem) => {
        const indexItem = data.findIndex(item => item.id === card.id);
        const updatedCards = [...data];
        let newItem: CardItem;
        if (updatedCards[indexItem].opened == null || updatedCards[indexItem].opened == false) newItem = {...card, opened: true}
        else newItem = {...card, opened: false};
        updatedCards[indexItem] = newItem;
        setData(updatedCards);
    }

    const deleteCard = (card: CardItem) => {
        setData(prevCards => prevCards.filter(item => item.id !== card.id))
    }
    

    return { data, selectCard, deleteCard }
}