import { Callout } from '@radix-ui/themes'

export const ResultBlock = ({ result }) => {
    return (
        <Callout.Root color={'green'}>
            <Callout.Text>{result}</Callout.Text>
        </Callout.Root>
    )
}
