import { Callout } from '@radix-ui/themes'

export const ResultBlock = ({ result }) => {
    return (
        <Callout.Root color={'green'}>
            <Callout.Text style={{ overflowWrap: 'anywhere' }}>
                {result}
            </Callout.Text>
        </Callout.Root>
    )
}
