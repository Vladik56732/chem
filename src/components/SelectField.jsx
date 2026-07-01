import { Select } from '@radix-ui/themes'

export const SelectField = ({ options, defaultValue, value, setValue }) => {
    return (
        <Select.Root
            defaultValue={defaultValue}
            value={value}
            onValueChange={value => {
                setValue?.(value)
            }}
        >
            <Select.Trigger />
            <Select.Content>
                {options.map(option => {
                    return (
                        <Select.Item key={option.value} value={option.value}>
                            {option.label}
                        </Select.Item>
                    )
                })}
            </Select.Content>
        </Select.Root>
    )
}
