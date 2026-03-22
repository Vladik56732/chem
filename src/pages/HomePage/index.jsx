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

export const HomePage = () => {
    const { t } = useTranslation()

    return (
        <Box
            style={{
                background:
                    'radial-gradient(circle at 20% 0%, var(--accent-3), transparent 40%)',
            }}
        >
            <Container size="4" py="8">
                <Flex direction="column" gap="9">
                    {/* HERO */}
                    <Flex align="center" justify="between" gap="8" wrap="wrap">
                        <Box style={{ flex: '1 1 420px' }}>
                            <AspectRatio ratio={16 / 9}>
                                <img
                                    src={image}
                                    alt="chemistry"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 'var(--radius-3)',
                                        boxShadow:
                                            '0 20px 60px rgba(0,0,0,0.25)',
                                    }}
                                />
                            </AspectRatio>
                        </Box>

                        <Box style={{ flex: '1 1 380px' }}>
                            <Heading size="9" mb="4">
                                {t('home.header.title')}
                            </Heading>

                            <Blockquote size="5" mb="5">
                                Понимание химии — это умение управлять материей.
                            </Blockquote>

                            <Text size="4" color="gray" mb="6">
                                От атомов до космических технологий. Изучай
                                реакции, вещества и открывай мир науки.
                            </Text>

                            <Flex gap="4" mt="3">
                                <Button size="4">Начать изучение</Button>

                                <Button size="4" variant="soft">
                                    Смотреть эксперименты
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>

                    <Separator size="4" />

                    {/* STATS */}
                    <Grid columns="3" gap="6">
                        <Card size="3">
                            <Heading size="6">50+</Heading>
                            <Text color="gray">Тем химии</Text>
                        </Card>

                        <Card size="3">
                            <Heading size="6">100+</Heading>
                            <Text color="gray">Реакций</Text>
                        </Card>

                        <Card size="3">
                            <Heading size="6">∞</Heading>
                            <Text color="gray">Интереса к науке</Text>
                        </Card>
                    </Grid>

                    {/* FEATURES */}
                    <Box>
                        <Heading size="7" mb="6">
                            Что можно изучить
                        </Heading>

                        <Grid
                            columns={{
                                initial: '1',
                                sm: '2',
                                lg: '3',
                            }}
                            gap="6"
                        >
                            {[
                                {
                                    title: 'Органическая химия',
                                    text: 'Соединения углерода и основы жизни',
                                },
                                {
                                    title: 'Неорганическая химия',
                                    text: 'Металлы, соли и реакции',
                                },
                                {
                                    title: 'Физическая химия',
                                    text: 'Энергия и скорость реакций',
                                },
                                {
                                    title: 'Эксперименты',
                                    text: 'Визуальные демонстрации',
                                },
                                {
                                    title: 'Подготовка к экзаменам',
                                    text: 'Структурированные темы',
                                },
                                {
                                    title: 'Интересные факты',
                                    text: 'Химия вокруг нас',
                                },
                            ].map(item => (
                                <Card
                                    key={item.title}
                                    size="3"
                                    style={{
                                        transition: 'all .2s ease',
                                        cursor: 'pointer',
                                    }}
                                    className="chem-card"
                                >
                                    <Heading size="4" mb="2">
                                        {item.title}
                                    </Heading>
                                    <Text color="gray">{item.text}</Text>
                                </Card>
                            ))}
                        </Grid>
                    </Box>

                    {/* EVERYDAY CHEMISTRY */}
                    <Box>
                        <Heading size="7" mb="6">
                            Химия вокруг нас
                        </Heading>

                        <Grid columns={{ initial: '1', sm: '2' }} gap="6">
                            {[
                                'Почему бензин горит',
                                'Почему мыло моет',
                                'Почему сода пузырится',
                                'Почему железо ржавеет',
                            ].map(title => (
                                <Card
                                    key={title}
                                    size="3"
                                    style={{
                                        transition: 'all .2s ease',
                                    }}
                                >
                                    <Heading size="4">{title}</Heading>
                                </Card>
                            ))}
                        </Grid>
                    </Box>

                    {/* CTA */}
                    <Card size="4">
                        <Flex
                            align="center"
                            justify="between"
                            wrap="wrap"
                            gap="4"
                        >
                            <Box>
                                <Heading size="6" mb="2">
                                    Готов начать изучать химию?
                                </Heading>
                                <Text color="gray">
                                    Перейди к интерактивным урокам
                                </Text>
                            </Box>

                            <Button size="4">Открыть уроки</Button>
                        </Flex>
                    </Card>
                </Flex>
            </Container>

            <style jsx>{`
                .chem-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </Box>
    )
}
