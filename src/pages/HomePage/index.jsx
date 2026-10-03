import { useTranslation } from 'react-i18next'
import {
    Flex,
    Text,
    AspectRatio,
    Blockquote,
    Box,
    Heading,
    Button,
    Card,
    Grid,
    Container,
    Separator,
} from '@radix-ui/themes'

import image from './oil.webp'
import style from './style.module.css'

const LEARN_ITEMS = [
    'organic',
    'inorganic',
    'physical',
    'experiments',
    'exams',
    'facts',
]

const EVERYDAY_ITEMS = ['gasoline', 'soap', 'soda', 'rust']

const STATS = [
    { value: '50+', key: 'topics' },
    { value: '100+', key: 'reactions' },
    { value: '∞', key: 'interest' },
]

export const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Box className={style.page}>
            <Container className={style.content} size="4" py={{ initial: '5', md: '8' }}>
                <Flex direction="column" gap={{ initial: '6', md: '9' }}>
                    <Flex align="center" justify="between" gap={{ initial: '5', md: '8' }} wrap="wrap">
                        <Box className={style.heroMedia}>
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    src={image}
                                    alt={t('home.image-alt')}
                                    className={style.heroImage}
                                />
                            </AspectRatio>
                        </Box>

                        <Box className={style.heroCopy}>
                            <Heading size={{ initial: '7', sm: '8', md: '9' }} mb="4">
                                {t('home.header.title')}
                            </Heading>

                            <Blockquote size={{ initial: '3', sm: '5' }} mb="5">
                                {t('home.quote')}
                            </Blockquote>

                            <Text size={{ initial: '3', sm: '4' }} color="gray" mb="6">
                                {t('home.subtitle')}
                            </Text>

                            <Grid columns={{ initial: '1', xs: '2' }} gap="3" mt="3">
                                <Button className={style.stretch} size={{ initial: '3', sm: '4' }}>
                                    {t('home.start')}
                                </Button>

                                <Button
                                    className={style.stretch}
                                    size={{ initial: '3', sm: '4' }}
                                    variant="soft"
                                >
                                    {t('home.watch-experiments')}
                                </Button>
                            </Grid>
                        </Box>
                    </Flex>

                    <Separator size="4" />

                    <Grid columns={{ initial: '1', xs: '3' }} gap={{ initial: '3', sm: '6' }}>
                        {STATS.map(item => (
                            <Card key={item.key} size="3">
                                <Heading size="6">{item.value}</Heading>
                                <Text color="gray">
                                    {t(`home.stats.${item.key}`)}
                                </Text>
                            </Card>
                        ))}
                    </Grid>

                    <Box>
                        <Heading size={{ initial: '5', sm: '7' }} mb="6">
                            {t('home.learn.title')}
                        </Heading>

                        <Grid
                            columns={{
                                initial: '1',
                                sm: '2',
                                lg: '3',
                            }}
                            gap={{ initial: '3', sm: '6' }}
                        >
                            {LEARN_ITEMS.map(item => (
                                <Card
                                    key={item}
                                    size="3"
                                    className={style.card}
                                >
                                    <Heading size="4" mb="2">
                                        {t(`home.learn.${item}.title`)}
                                    </Heading>
                                    <Text color="gray">
                                        {t(`home.learn.${item}.text`)}
                                    </Text>
                                </Card>
                            ))}
                        </Grid>
                    </Box>

                    <Box>
                        <Heading size={{ initial: '5', sm: '7' }} mb="6">
                            {t('home.everyday.title')}
                        </Heading>

                        <Grid columns={{ initial: '1', sm: '2' }} gap={{ initial: '3', sm: '6' }}>
                            {EVERYDAY_ITEMS.map(item => (
                                <Card key={item} size="3">
                                    <Heading size="4">
                                        {t(`home.everyday.${item}`)}
                                    </Heading>
                                </Card>
                            ))}
                        </Grid>
                    </Box>

                    <Card size={{ initial: '2', sm: '4' }}>
                        <Flex
                            align={{ initial: 'stretch', sm: 'center' }}
                            justify="between"
                            direction={{ initial: 'column', sm: 'row' }}
                            gap="4"
                        >
                            <Box style={{ minWidth: 0 }}>
                                <Heading size={{ initial: '5', sm: '6' }} mb="2">
                                    {t('home.cta.title')}
                                </Heading>
                                <Text color="gray">
                                    {t('home.cta.description')}
                                </Text>
                            </Box>

                            <Button className={style.ctaButton} size={{ initial: '3', sm: '4' }}>
                                {t('home.cta.button')}
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
            </Container>
        </Box>
    )
}
