import StatisticLine from './StatisticLine'

const Statistics = ({cardio, upper, lower, rest}) => {
    const total = cardio + upper + lower

    if (total === 0 && rest === 0) {
        return <p> No workouts recorded </p>
    }

    return (
        <table>
            <tbody>
                <StatisticLine label="Cardio" value={cardio + " mins"} />
                <StatisticLine label="Upper body" value={upper + " mins"} />
                <StatisticLine label="Lower body" value={lower + " mins"} />
                <StatisticLine label="Rest days" value={rest} />
                <StatisticLine label="Total workout time" value={total + " mins"} />
            </tbody>
        </table>
    )
}

export default Statistics
