import { useLanguage } from "./LanguageContext";


const handleChangeLanguage = (e) => {
    setLanguage(e.target.value)
}


const LanguajeSelector = () => {
    const { language, setLanguage } = useLanguage();
    return (
        <>
            <label>Select language:</label>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="it">Itialian</option>

            </select>
        </>
    )
}
export default LanguajeSelector