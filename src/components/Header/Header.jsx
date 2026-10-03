import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Button, Text } from '@radix-ui/themes'

import style from './style.module.css'

const LINKS = [
    { to: '/', key: 'main' },
    { to: '/calculator', key: 'calculator' },
    { to: '/converter', key: 'converter' },
    { to: '/table', key: 'table' },
]

export const Header = () => {
    const { t, i18n } = useTranslation()
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <header className={style.wrap}>
            <div className={style.header}>
                <button
                    type="button"
                    className={style.menuButton}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label={
                        open
                            ? t('common.header.close-menu')
                            : t('common.header.menu')
                    }
                    onClick={() => setOpen(value => !value)}
                >
                    <span className={style.burger} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>
                </button>

                <Text className={style.mobileTitle} size="3" weight="bold" truncate>
                    {t('common.title')}
                </Text>

                <nav className={style.links}>
                    {LINKS.map(link => (
                        <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                            <Text size="4">
                                {t(`common.header.links.${link.key}`)}
                            </Text>
                        </NavLink>
                    ))}
                </nav>

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

            {open && (
                <nav id="mobile-nav" className={style.mobileNav}>
                    {LINKS.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            onClick={() => setOpen(false)}
                        >
                            {t(`common.header.links.${link.key}`)}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    )
}
