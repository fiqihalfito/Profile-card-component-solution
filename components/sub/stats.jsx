import StatsItem from "./stats-item";

export default function Stats() {
    return (
        <div className="grid grid-cols-3 text-center p-6 mt-6 border-t-2">
            <StatsItem total="80K" type="Followers" />
            <StatsItem total="803K" type="Likes" />
            <StatsItem total="1.4K" type="Photos" />
        </div>
    )
}