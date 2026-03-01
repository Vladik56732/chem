import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Flex } from '@radix-ui/themes'

export const BaseLayout = () => {
    return (
        <Flex direction={'column'}>
            <Header />
            <Flex justify={'center'} style={{ padding: 'var(--space-4)' }}>
                <Outlet />
            </Flex>
        </Flex>
    )
}
