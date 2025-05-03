export const GroupBy = () => {

    const data = [
        { id: 1, category: 'A', value: 10 },
        { id: 2, category: 'B', value: 20 },
        { id: 3, category: 'A', value: 30 },
        { id: 4, category: 'C', value: 40 },
        { id: 5, category: 'B', value: 50 },
    ];

    const groupedData = data.reduce((accumulator, current) => {
        const key = current.category;
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(current);
        return accumulator;
    }, {});


    return (
        <>
            <div>
                {Object.keys(groupedData).map(key => (
                    <div key={key}>
                        <h2>{key}</h2>
                        <ul>
                            {groupedData[key].map(item => (
                                <li key={item.id}>
                                    ID: {item.id}, Value: {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}