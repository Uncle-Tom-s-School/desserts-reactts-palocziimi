import DessertCard from "../components/DessertCard"
import { DessertCardProp } from "../components/DessertCard";

const home = () => {
    let lista: DessertCardProp = [
        {name:"Almáspote", category:"Pie", price:0},
    ];

    return (
        <div>
            <section>
                <h1>Desserts </h1>
                <div className="cards-grid">
                    {
                        lista.map((suti) => <DessertCard {...suti}/>)
                    }
                </div>
            </section>
        </div>
    )
}

export default home