import { useTranslation } from 'react-i18next'
import { Popover, Text } from '@radix-ui/themes'

import styles from './style.module.css'

const getColorByType = type => {
    switch (type) {
        case 'transition-metal':
            return '#22a6b8'
        case 'non-metal':
            return '#8bc58f'
        case 'halogen':
            return '#f2db42'
        case 'alkaline-earth':
            return '#f0b04f'
        case 'metalloid':
            return '#49c1a2'
        case 'basic-metal':
            return '#61a9d8'
        case 'alkali-metal':
            return '#4b78c7'
        case 'noble-gas':
            return '#f08ca0'
        case 'lanthanide':
            return '#f7c7be'
        case 'actinide':
            return '#ef7c4f'
        case 'less-known':
            return '#9e9e9e'
        default:
            return 'transparent'
    }
}

export const ElementCard = ({ element }) => {
    const { t } = useTranslation()

    return (
        <Popover.Root>
            <Popover.Trigger>
                <button
                    type="button"
                    className={styles.element}
                    style={{ backgroundColor: getColorByType(element.type) }}
                    aria-label={element.name}
                >
                    <b>{element.atomic_number}</b>
                    <span>{element.symbol}</span>
                </button>
            </Popover.Trigger>
            <Popover.Content size="2" maxWidth="280px">
                <Text as="div" size="2" trim="both">
                    {t('table.element.description', { name: element.name })}
                </Text>
            </Popover.Content>
        </Popover.Root>
    )
}
