import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"(Yoruka#9010): Eita! Parece que nosso website caiu por conta do servidor (Host). Então está posso exibir o erro: [500 Internal Server Error]"} />
}

export default UnkownPage;