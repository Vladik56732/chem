import { useTranslation } from 'react-i18next'
import { Flex, Text, AspectRatio, Blockquote, Box } from '@radix-ui/themes'

import image from './oil.webp'

export const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Flex align="center" gap="8">
            <AspectRatio ratio={16 / 8}>
                <img
                    src={image}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--radius-2)',
                    }}
                />
            </AspectRatio>
            <Box maxWidth="1000px">
                <Blockquote size="7">
                    Понимание химии — это умение управлять материей.
                </Blockquote>
            </Box>
        </Flex>
    )
}
