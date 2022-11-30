export default function StatsItem(props) {
    return (
        <div>
            <div className="font-bold text-lg">{props.total}</div>
            <div className="text-xs tracking-widest text-darkGray">{props.type}</div>
        </div>
    )
}