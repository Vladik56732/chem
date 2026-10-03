import { Select } from '@radix-ui/themes'

export const SelectField = ({ options, defaultValue, value, setValue }) => {
    return (
        <Select.Root
            defaultValue={defaultValue}
            value={value}
            size={{ initial: '3', sm: '2' }}
            onValueChange={value => {
                setValue?.(value)
            }}
        >
            <Select.Trigger style={{ flexShrink: 0, minWidth: '5.5rem' }} />
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
