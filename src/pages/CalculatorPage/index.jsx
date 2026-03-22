import { useState } from 'react'
import { Button, Card, Flex, Text } from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

import { ResultBlock } from './ResultBlock'
import { TextField } from './TextField'

export const CalculatorPage = () => {
    const { t, i18n } = useTranslation()
    const [formula1, setFormula1] = useState('')
    const [formula2, setFormula2] = useState('')
    console.log(formula1, formula2)

    const [result, setResult] = useState('')

    const [loading, setLoading] = useState(false)

    const onClick = () => {
        setLoading(true)

        console.log('запрос')
        fetch('https://ai.koroden.ru', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formula1,
                formula2,
                language: i18n.resolvedLanguage,
            }),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Ответ:', data)
                setResult(data)
            })
            .catch(error => {
                console.error('Ошибка:', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Flex direction={'column'} justify={'center'} gap={'4'} width={'360px'}>
            <Text size={'8'} align={'center'}>
                {t('calculator.title')}
            </Text>
            <Card size={'2'}>
                <Flex direction="column" gap={'4'}>
                    <Flex justify={'center'} gap={'2'}>
                        <TextField value={formula1} setValue={setFormula1} />
                        <Text>+</Text>
                        <TextField value={formula2} setValue={setFormula2} />
                    </Flex>
                    {result && <ResultBlock result={result} />}
                    <Button loading={loading} onClick={onClick}>
                        {t('calculator.submit-button')}
                    </Button>
                </Flex>
            </Card>
        </Flex>
    )
}
