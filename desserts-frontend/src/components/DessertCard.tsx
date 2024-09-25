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
    <div>
      <h2>{props.name}</h2>
      <img src={props.image?.desktop} alt="kep" />
    </div>
  )
}

export default DessertCard