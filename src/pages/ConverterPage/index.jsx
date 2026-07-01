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
    Tabs,
} from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

import { TextField } from '../../components/TextField'
import { SelectField } from '../../components/SelectField'

const TABS = {
    TEMPERATURE: 'temperature',
    PRESSURE: 'pressure',
}

const options = [
    {
        value: 'C',
        label: 'C',
    },
    {
        value: 'F',
        label: 'F',
    },
    {
        value: 'K',
        label: 'K',
    },
]

function convertValue(value, fromUnit, toUnit) {
    if (fromUnit === 'C') {
        if (toUnit === 'C') {
            return value
        } else if (toUnit === 'K') {
            if (Number(value) == 1) {
                return 1
            }

            return Number(value) + 273.5
        } else {
            return (Number(value) * 9) / 5 + 32
        }
    } else if (fromUnit === 'K') {
    }
}

export const ConverterPage = () => {
    const { t, i18n } = useTranslation()
    const [leftUnit, setLeftUnit] = useState('C')
    const [rightUnit, setRightUnit] = useState('K')
    const [leftValue, setLeftValue] = useState(1)
    const rightValue = convertValue(leftValue, leftUnit, rightUnit)

    console.log(leftUnit, rightUnit)

    return (
        <Container size="2" py="8">
            <Flex direction="column" gap="4">
                <Box>
                    <Heading size="8" mb="2">
                        {t('converter.title')}
                    </Heading>

                    <Text color="gray" size="4">
                        {t('converter.description')}
                    </Text>
                </Box>

                <Tabs.Root defaultValue={TABS.TEMPERATURE}>
                    <Tabs.List>
                        <Tabs.Trigger value={TABS.TEMPERATURE}>
                            {t(`converter.tab.${TABS.TEMPERATURE}`)}
                        </Tabs.Trigger>
                        <Tabs.Trigger value={TABS.PRESSURE}>
                            {t(`converter.tab.${TABS.PRESSURE}`)}
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value={TABS.TEMPERATURE}>
                            <Flex direction="row" gap="8">
                                <Flex direction="row">
                                    <TextField
                                        value={leftValue}
                                        setValue={value => setLeftValue(value)}
                                    />
                                    <SelectField
                                        value={leftUnit}
                                        setValue={value => setLeftUnit(value)}
                                        defaultValue={'C'}
                                        options={options}
                                    />
                                </Flex>
                                <Flex direction="row">
                                    <TextField value={rightValue} />
                                    <SelectField
                                        value={rightUnit}
                                        setValue={value => setRightUnit(value)}
                                        defaultValue={'K'}
                                        options={options}
                                    />
                                </Flex>
                            </Flex>
                        </Tabs.Content>

                        <Tabs.Content value={TABS.PRESSURE}>
                            <Text size="2">
                                Access and update your documents.
                            </Text>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Flex>
        </Container>
    )
}
