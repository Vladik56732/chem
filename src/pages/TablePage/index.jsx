import { Dialog } from '@radix-ui/themes'
import image from './image.png'
import tableData from './table.json'
import styles from './style.module.css'
import { ElementCard } from './ElementCard'

function mapElementsToTable(elements) {
    let arr = Array.from({ length: 10 }, () => Array(18).fill(null))

    elements.forEach(element => {
        if (element.atomic_number > 57 && element.atomic_number < 72) {
            arr[7][element.atomic_number - 55] = element
        } else if (element.atomic_number > 89 && element.atomic_number < 104) {
            arr[8][element.atomic_number - 87] = element
        } else {
            arr[element.period_number - 1][element.group_number - 1] = element
        }
    })

    return arr
}

export const TablePage = () => {
    console.log(tableData)
    const grid = mapElementsToTable(tableData)

    return (
        <div className={styles.table}>
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={styles.cell}
                    >
                        {cell && <ElementCard element={cell} />}
                    </div>
                )),
            )}
        </div>
    )
}
