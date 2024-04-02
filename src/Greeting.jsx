import { useLanguage } from "./LanguageContext";

const Greeting = () => {
    const { languaje } = useLanguage();

    const greetings = {
        en: "Hello",
        es: "Hola",
        it: "Ciao"
    }

    return (<>

        <h2>{greetings[languaje]}</h2>
    </>)
}
export default Greeting
