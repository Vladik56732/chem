import { TextField as TextFieldBase } from '@radix-ui/themes'

export const TextField = ({ value, setValue, readOnly }) => {
    return (
        <TextFieldBase.Root
            value={value}
            readOnly={readOnly}
            size={{ initial: '3', sm: '2' }}
            style={{ width: '100%', minWidth: 0 }}
            onInput={event => {
                setValue?.(event.target.value)
            }}
        />
    )
}
