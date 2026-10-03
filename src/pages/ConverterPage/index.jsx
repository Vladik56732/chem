import { useState } from 'react'
import { Flex, Text, Container, Box, Heading, Tabs } from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

import { TextField } from '../../components/TextField'
import { SelectField } from '../../components/SelectField'
import style from './style.module.css'

const TABS = {
    TEMPERATURE: 'temperature',
    PRESSURE: 'pressure',
}

const TEMPERATURE_OPTIONS = [
    { value: 'C', label: '°C' },
    { value: 'F', label: '°F' },
    { value: 'K', label: 'K' },
]

const PRESSURE_OPTIONS = [
    { value: 'Pa', label: 'Pa' },
    { value: 'kPa', label: 'kPa' },
    { value: 'bar', label: 'bar' },
    { value: 'atm', label: 'atm' },
    { value: 'mmHg', label: 'mmHg' },
]

const PASCALS_IN_UNIT = {
    Pa: 1,
    kPa: 1000,
    bar: 100000,
    atm: 101325,
    mmHg: 101325 / 760,
}

function formatResult(value) {
    if (!Number.isFinite(value)) {
        return ''
    }

    return String(Number(value.toPrecision(12)))
}

function toCelsius(value, unit) {
    if (unit === 'K') {
        return value - 273.15
    }

    if (unit === 'F') {
        return ((value - 32) * 5) / 9
    }

    return value
}

function fromCelsius(value, unit) {
    if (unit === 'K') {
        return value + 273.15
    }

    if (unit === 'F') {
        return (value * 9) / 5 + 32
    }

    return value
}

function convertTemperature(value, fromUnit, toUnit) {
    const numeric = Number(value)

    if (value === '' || Number.isNaN(numeric)) {
        return ''
    }

    return formatResult(fromCelsius(toCelsius(numeric, fromUnit), toUnit))
}

function convertPressure(value, fromUnit, toUnit) {
    const numeric = Number(value)

    if (value === '' || Number.isNaN(numeric)) {
        return ''
    }

    const pascals = numeric * PASCALS_IN_UNIT[fromUnit]

    return formatResult(pascals / PASCALS_IN_UNIT[toUnit])
}

function UnitRow({ value, unit, units, onValueChange, onUnitChange, readOnly }) {
    return (
        <Flex className={style.row} direction="row" gap="2" align="center">
            <Box style={{ flex: 1, minWidth: 0 }}>
                <TextField
                    value={value}
                    setValue={onValueChange}
                    readOnly={readOnly}
                />
            </Box>
            <SelectField value={unit} setValue={onUnitChange} options={units} />
        </Flex>
    )
}

function Converter({
    units,
    leftUnit,
    rightUnit,
    leftValue,
    onLeftUnitChange,
    onRightUnitChange,
    onLeftValueChange,
    convert,
}) {
    const rightValue = convert(leftValue, leftUnit, rightUnit)

    return (
        <Flex
            direction={{ initial: 'column', sm: 'row' }}
            gap="3"
            align={{ initial: 'stretch', sm: 'center' }}
        >
            <UnitRow
                value={leftValue}
                unit={leftUnit}
                units={units}
                onValueChange={onLeftValueChange}
                onUnitChange={onLeftUnitChange}
            />
            <Text size="5" align="center">
                =
            </Text>
            <UnitRow
                value={rightValue}
                unit={rightUnit}
                units={units}
                onUnitChange={onRightUnitChange}
                readOnly
            />
        </Flex>
    )
}

export const ConverterPage = () => {
    const { t } = useTranslation()
    const [temperatureValue, setTemperatureValue] = useState('0')
    const [temperatureFrom, setTemperatureFrom] = useState('C')
    const [temperatureTo, setTemperatureTo] = useState('K')
    const [pressureValue, setPressureValue] = useState('0')
    const [pressureFrom, setPressureFrom] = useState('atm')
    const [pressureTo, setPressureTo] = useState('Pa')

    return (
        <Container size="2" py={{ initial: '4', md: '8' }}>
            <Flex direction="column" gap="4">
                <Box>
                    <Heading size={{ initial: '6', sm: '8' }} mb="2">
                        {t('converter.title')}
                    </Heading>

                    <Text color="gray" size={{ initial: '3', sm: '4' }}>
                        {t('converter.description')}
                    </Text>
                </Box>

                <Tabs.Root className={style.tabs} defaultValue={TABS.TEMPERATURE}>
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
                            <Converter
                                units={TEMPERATURE_OPTIONS}
                                leftValue={temperatureValue}
                                leftUnit={temperatureFrom}
                                rightUnit={temperatureTo}
                                onLeftValueChange={setTemperatureValue}
                                onLeftUnitChange={setTemperatureFrom}
                                onRightUnitChange={setTemperatureTo}
                                convert={convertTemperature}
                            />
                        </Tabs.Content>

                        <Tabs.Content value={TABS.PRESSURE}>
                            <Converter
                                units={PRESSURE_OPTIONS}
                                leftValue={pressureValue}
                                leftUnit={pressureFrom}
                                rightUnit={pressureTo}
                                onLeftValueChange={setPressureValue}
                                onLeftUnitChange={setPressureFrom}
                                onRightUnitChange={setPressureTo}
                                convert={convertPressure}
                            />
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Flex>
        </Container>
    )
}
