export default function CardContainer({titulo, children}) {
    return(
        <div className="my-10 ">
        <h1 className="font-bold text-3xl">{titulo}</h1>
        <div className="flex gap-6 justify-around items-center">
            {children}
        </div>
        </div>
    )
}