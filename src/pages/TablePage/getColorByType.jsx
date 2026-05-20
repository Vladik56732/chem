export const getColorByType = type => {
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
