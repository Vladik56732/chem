import image from './image.png'
import tableData from './table.json'

export const TablePage = () => {
    console.log(tableData)

    const table = []
    let tableRow = []
    let groupNumber = 1
    tableData.forEach(({ symbol, period_number }) => {
        if (period_number != groupNumber) {
            console.log(groupNumber)
            table.push(tableRow)
            tableRow = []
            groupNumber++
        }

        tableRow.push(<td>{symbol}</td>)
    })
    console.log(table)
    return (
        <>
            {/* <img src={image} alt="" width="80%" /> */}
            <table border="1px">
                <thead>Periodic Table</thead>
                <tbody>
                    {table.map(row => {
                        return <tr>{row}</tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
