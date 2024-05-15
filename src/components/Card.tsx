import { CardItem } from "../types"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';

type CardProps = {
    card: CardItem,
    selectCard: (card: CardItem) => void
    deleteCard: (card: CardItem) => void
}

export default function Card({ card, selectCard, deleteCard }: CardProps) {

    return (
        <div>
            {card.opened ? (
                <div className="flex items-center justify-around rounded-xl border-solid border-2 p-5 bg-slate-100 w-60 h-72">
                    <ArrowUturnLeftIcon 
                        className="h-8 w-8 text-gray-800 cursor-pointer hover:text-slate-400"
                        onClick={() => selectCard(card)}/>
                    <XCircleIcon 
                        className="h-8 w-8 text-gray-800 cursor-pointer hover:text-slate-400"
                        onClick={() => deleteCard(card)}/>
                </div>
            ) : (
                <div
                    className="flex flex-col justify-between max-w-60 rounded-xl border-solid border-2 p-5 bg-slate-100 cursor-pointer hover:bg-gray-300"
                    onClick={() => selectCard(card)}>
                    <div className="flex flex-col">
                        <h1 className="font-black uppercase mb-4">{card.title}</h1>
                        <span className="capitalize">{card.body}</span>
                    </div>
                    <span className="mt-2 flex justify-end">{card.userId}</span>
                </div>
            )}
        </div>
    )
}
