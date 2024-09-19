export default function CardContainer({titulo, children}) {
    return(
        <div className="my-10">
        <h1>{titulo}</h1>
        <div className="flex gap-6 justify-around">
            {children}
        </div>
        </div>
    )
}