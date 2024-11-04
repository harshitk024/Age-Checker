const Age = ({age}) => {

    return (
        <div className="age relative flex flex-col gap-4 p-4 rounded-md max-w-sm mx-auto ">
            <p><strong>{age.years} </strong>years,</p>
            <p><strong>{age.months} </strong>months and</p>
            <p><strong>{age.days} </strong>days old</p>
        </div>
    )
}

export default Age