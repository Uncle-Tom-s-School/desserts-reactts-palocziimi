export type DessertCardProp = {
    name: string,
    category: string,
    price: number,
    image?: {
        thumnail?: string,
        mobile?: string,
        tablet?: string,
        desktop: string,
    },
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>{props.name}</div>
  )
}

export default DessertCard