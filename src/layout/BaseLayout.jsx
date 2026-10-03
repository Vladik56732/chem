import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Box, Flex } from '@radix-ui/themes'

import style from './style.module.css'

export const BaseLayout = () => {
    return (
        <Flex direction="column" className={style.shell}>
            <Header />
            <Box className={style.main}>
                <Outlet />
            </Box>
        </Flex>
    )
}
