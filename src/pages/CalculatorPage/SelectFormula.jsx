import { Select } from '@radix-ui/themes'

export const SelectFormula = ({ formulas, value, setValue }) => {
    return (
        <Select.Root
            defaultValue={formulas[0].formula}
            value={value}
            onValueChange={value => {
                console.log(value)
                setValue(value)
            }}
        >
            <Select.Trigger />
            <Select.Content>
                {formulas.map(item => {
                    return (
                        <Select.Item key={item.formula} value={item.formula}>
                            {item.formula} &bull; {item.name}
                        </Select.Item>
                    )
                })}
            </Select.Content>
        </Select.Root>
    )
}
