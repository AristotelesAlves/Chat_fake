export default function Ponteiro({user, mensagem}){
    return (
        <div className="flex items-center gap-1">
            <p className="text-green-400">
                4chan: 
            </p>
            <span className=" text-purple-400">
                ~/{user}$ 
            </span>
            <span>
                {mensagem}
            </span>
        </div>
    )
}