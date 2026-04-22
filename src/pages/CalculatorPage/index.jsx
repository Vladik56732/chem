import { useState } from 'react'
import {
    Button,
    Card,
    Flex,
    Text,
    Container,
    Box,
    Badge,
    Heading,
    Grid,
} from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

import { ResultBlock } from './ResultBlock'
import { TextField } from './TextField'

// export const CalculatorPage = () => {
//     const { t, i18n } = useTranslation()
//     const [formula1, setFormula1] = useState('')
//     const [formula2, setFormula2] = useState('')
//     console.log(formula1, formula2)

//     const [result, setResult] = useState('')

//     const [loading, setLoading] = useState(false)

//     const onClick = () => {
//         setLoading(true)

//         console.log('запрос')
//         fetch('https://ai.koroden.ru', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 formula1,
//                 formula2,
//                 language: i18n.resolvedLanguage,
//             }),
//         })
//             .then(response => response.text())
//             .then(data => {
//                 console.log('Ответ:', data)
//                 setResult(data)
//             })
//             .catch(error => {
//                 console.error('Ошибка:', error)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }

//     return (
//         <Flex direction={'column'} justify={'center'} gap={'4'} width={'360px'}>
//             <Text size={'8'} align={'center'}>
//                 {t('calculator.title')}
//             </Text>
//             <Card size={'2'}>
//                 <Flex direction="column" gap={'4'}>
//                     <Flex justify={'center'} gap={'2'}>
//                         <TextField value={formula1} setValue={setFormula1} />
//                         <Text>+</Text>
//                         <TextField value={formula2} setValue={setFormula2} />
//                     </Flex>
//                     {result && <ResultBlock result={result} />}
//                     <Button loading={loading} onClick={onClick}>
//                         {t('calculator.submit-button')}
//                     </Button>
//                 </Flex>
//             </Card>
//         </Flex>
//     )
// }
export const CalculatorPage = () => {
    const { t, i18n } = useTranslation()

    const [formula1, setFormula1] = useState('')
    const [formula2, setFormula2] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    const onClick = () => {
        setLoading(true)

        fetch('https://ai.koroden.ru', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formula1,
                formula2,
                language: i18n.resolvedLanguage,
            }),
        })
            .then(response => response.text())
            .then(data => setResult(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    return (
        <Container size="2" py="8">
            <Flex direction="column" gap="6">
                {/* HEADER */}
                <Box>
                    <Badge size="3" mb="3">
                        AI Chemistry Tool
                    </Badge>

                    <Heading size="8" mb="2">
                        {t('calculator.title')}
                    </Heading>

                    <Text color="gray" size="4">
                        Введи две формулы и получи результат реакции, объяснение
                        или анализ.
                    </Text>
                </Box>

                {/* MAIN CARD */}
                <Card size="4">
                    <Flex direction="column" gap="5">
                        <Grid
                            columns={{ initial: '1', sm: '3' }}
                            gap="4"
                            align="center"
                        >
                            <TextField
                                value={formula1}
                                setValue={setFormula1}
                            />

                            <Flex justify="center">
                                <Text size="7">+</Text>
                            </Flex>

                            <TextField
                                value={formula2}
                                setValue={setFormula2}
                            />
                        </Grid>

                        <Button size="4" loading={loading} onClick={onClick}>
                            {t('calculator.submit-button')}
                        </Button>

                        {result && (
                            <>
                                <Separator size="4" />
                                <Box>
                                    <Heading size="5" mb="3">
                                        Результат
                                    </Heading>

                                    <ResultBlock result={result} />
                                </Box>
                            </>
                        )}
                    </Flex>
                </Card>

                {/* EXAMPLES */}
                <Card variant="soft">
                    <Heading size="5" mb="4">
                        Примеры
                    </Heading>

                    <Flex gap="3" wrap="wrap">
                        <Badge
                            size="3"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setFormula1('HCl')
                                setFormula2('NaOH')
                            }}
                        >
                            HCl + NaOH
                        </Badge>

                        <Badge
                            size="3"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setFormula1('Na2CO3')
                                setFormula2('HCl')
                            }}
                        >
                            Na₂CO₃ + HCl
                        </Badge>

                        <Badge
                            size="3"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setFormula1('AgNO3')
                                setFormula2('NaCl')
                            }}
                        >
                            AgNO₃ + NaCl
                        </Badge>
                    </Flex>
                </Card>
            </Flex>
        </Container>
    )
}
