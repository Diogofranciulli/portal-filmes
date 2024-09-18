export default function CardContainer({titulo, children}) {
    return(
        <div className="">
        <h1>{titulo}</h1>
        <div className="flex gap-6">
            {children}
        </div>
        </div>
    )
}