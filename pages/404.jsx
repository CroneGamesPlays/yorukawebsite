import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        '(Yoruka#9010): Acho que você se aventurou tanto em nosso website que até perdeu a url correta, verifique sua url meu amigo!',
        '(Yoruka#9010): Caramba, deu o erro 404 na página. Verifique sua URL.',
        '(Yoruka#9010): Ops, acho que a url que você está acessando pode ser inválida ou não existe mais!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

