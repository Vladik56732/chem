import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Button, Text } from '@radix-ui/themes'

import style from './style.module.css'

export const Header = () => {
    const { t, i18n } = useTranslation()
    console.log(navigator)

    return (
        <div className={style.header}>
            <div className={style.links}>
                <Link to="/">
                    <Text size="4">{t('common.header.links.main')}</Text>
                </Link>

                <Link to="/calculator">
                    <Text size="4">{t('common.header.links.calculator')}</Text>
                </Link>
            </div>
            {/* <div>{t('test', { name: 'Vladimir' })}</div> */}
            <div className={style.languages}>
                <Button
                    disabled={i18n.resolvedLanguage == 'ru'}
                    onClick={() => {
                        i18n.changeLanguage('ru')
                    }}
                >
                    RU
                </Button>
                <Button
                    disabled={i18n.resolvedLanguage == 'en'}
                    onClick={() => {
                        i18n.changeLanguage('en')
                    }}
                >
                    EN
                </Button>
            </div>
        </div>
    )
}
