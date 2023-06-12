export default function TarefaDetalhePage({ params }) {
    const id = params.tarefaId

    if (id == 0) {
        throw Error("Deu ruim :(")
    }

    return (
        <h1>Tarefa {id}</h1>
    )
}