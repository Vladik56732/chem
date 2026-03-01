import { TextField as TextFieldBase } from '@radix-ui/themes'

export const TextField = ({ value, setValue }) => {
    return (
        <TextFieldBase.Root
            value={value}
            onInput={event => {
                console.log(event)
                setValue(event.target.value)
            }}
        />
    )
}
