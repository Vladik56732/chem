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
    Separator,
} from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

import { ResultBlock } from './ResultBlock'
import { TextField } from '../../components/TextField'

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
        <Container size="2" py={{ initial: '4', md: '8' }}>
            <Flex direction="column" gap="6">
                {/* HEADER */}
                <Box>
                    <Badge size="3" mb="3">
                        {t('calculator.badge')}
                    </Badge>

                    <Heading size={{ initial: '6', sm: '8' }} mb="2">
                        {t('calculator.title')}
                    </Heading>

                    <Text color="gray" size={{ initial: '3', sm: '4' }}>
                        {t('calculator.description')}
                    </Text>
                </Box>

                {/* MAIN CARD */}
                <Card size={{ initial: '2', sm: '4' }}>
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
                                <Text size={{ initial: '5', sm: '7' }}>+</Text>
                            </Flex>

                            <TextField
                                value={formula2}
                                setValue={setFormula2}
                            />
                        </Grid>

                        <Button
                            size={{ initial: '3', sm: '4' }}
                            loading={loading}
                            onClick={onClick}
                        >
                            {t('calculator.submit-button')}
                        </Button>

                        {result && (
                            <>
                                <Separator size="4" />
                                <Box>
                                    <Heading size="5" mb="3">
                                        {t('calculator.result')}
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
                        {t('calculator.examples')}
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
