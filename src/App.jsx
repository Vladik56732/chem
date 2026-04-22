import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CalculatorPage } from './pages/CalculatorPage'
import { TablePage } from './pages/TablePage'
import { BaseLayout } from './layout/BaseLayout'

export const App = () => {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/table" element={<TablePage />} />
            </Route>
        </Routes>
    )
}
