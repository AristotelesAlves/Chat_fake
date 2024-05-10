export default function Button({conteudoprops, ativado, funcao}){
    return (
        <button onClick={funcao} className={`px-4 py-1 font-medium rounded-md ${ativado ? 'bg-green-200 border-green-100' : 'bg-zinc-50 border-zinc-100'}  shadow-lg border-2  active:shadow-inner`}>
            {conteudoprops}
        </button>
    )
}