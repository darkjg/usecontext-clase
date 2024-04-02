import { useLanguage } from "./LanguageContext";




const LanguajeSelector = () => {
    const { language, changeLanguage } = useLanguage();

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value)
    }
    



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