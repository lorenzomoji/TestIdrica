import Card from './components/Card';
import { useCards } from './hooks/useCard';

function App() {

    const { data, selectCard, deleteCard } = useCards()

    return (
        <>
            <header>
                <div className="text-4xl font-bold text-slate-600 text-center p-5">
                    <h1>Test Idrica</h1>
                </div>
            </header>

            <section className="flex flex-wrap justify-center gap-10 p-10">
                {data.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        selectCard={selectCard}
                        deleteCard={deleteCard}
                    />
                ))}
            </section>
        </>
    )
}

export default App
