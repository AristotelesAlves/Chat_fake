import React, { useState, useEffect } from "react";
import Ponteiro from "../components/util/Ponteiro";
import { PaperPlaneTilt, SignOut } from "@phosphor-icons/react";

export function Home(){


    const [mensagem, setMensagem] = useState([]);
    const [sms, setSms] = useState('');
    const [modal, setModal] = useState(true);
    const [username, setUsername] = useState('');
    const [preName, setPrename] = useState('');


    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
            setModal(false);
        }
    }, []);

    function enviarMensagem(){
        setMensagem([...mensagem, {user: username, message: sms}]);
        setSms('');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    }

    function clearLocal() {
        localStorage.clear()
        window.location.reload()
    }

    function saveUsername() {
        if (preName.trim() !== '') {
            localStorage.setItem('username', preName);
            setUsername(preName)
            setModal(false); 
        } else {
            alert("Por favor, insira um nome de usuário válido.");
        }
    }

    return (
        <div className="flex flex-col w-screen h-screen p-3 rounded-lg relative">
            <button onClick={clearLocal} className="fixed text-white right-2 top-2 p-2">
                <SignOut size={32} />
            </button>
            {modal && (
                <div className="w-screen h-screen flex justify-center items-center z-50 bg-black bg-opacity-25 absolute left-0 top-0">
                    <div className="w-[70%] h-fit p-4 bg-white rounded-md z-60 flex flex-col gap-2">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h1 className="font-semibold text-4xl">
                                Bem vindo ao 4Chan
                            </h1>
                        </div>
                        <div className="w-full gap-2 flex ">
                            <input 
                                value={preName} 
                                onChange={(e) => setPrename(e.target.value)} 
                                type="text" 
                                placeholder="you" 
                                className="border-2 border-zinc-800 rounded-md p-2 w-full" 
                            />
                            <button 
                                onClick={saveUsername} 
                                className="p-2 rounded-md shadow-xl text-white bg-zinc-800 border-zinc-700 active:bg-zinc-700 active:shadow-inner"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-zinc-800 text-wrap overflow-auto text-white flex-1 rounded-md p-2 flex flex-col gap-1">
                {
                    username.length > 0 ? (
                        <>
                            <Ponteiro mensagem={''} user={'ADM'}/>
                            <p className="w-[500px]">
                                ……………▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
                                …………▄▄█▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓█▄▄
                                ………▄▀▀▓▒░░░░░░░░░░░░░░░░▒▓▓▀▄
                                ……▄▀▓▒▒░░░░░░░░░░░░░░░░░░░▒▒▓▀▄
                                …..█▓█▒░░░░░░░░░░░░░░░░░░░░░▒▓▒▓█
                                ..▌▓▀▒░░░░░░░░░░░░░░░░░░░░░░░░▒▀▓█
                                ..█▌▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█
                                ▐█▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█▌
                                █▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓█
                                █▐▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒█▓
                                █▓█▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒█▌▓█
                                █▓▓█▒░░░░▒█▄▒▒░░░░░░░░░▒▒▄█▒░░░░▒█▓▓█
                                █▓█▒░▒▒▒▒░░▀▀█▄▄░░░░░▄▄█▀▀░░▒▒▒▒░▒█▓█
                                █▓▌▒▒▓▓▓▓▄▄▄▒▒▒▀█░░░░█▀▒▒▒▄▄▄▓▓▓▓▒▒▐▓█
                                ██▌▒▓███▓█████▓▒▐▌░░▐▌▒▓████▓████▓▒▐██
                                .██▒▒▓███▓▓▓████▓▄░░░▄▓████▓▓▓███▓▒▒██
                                .█▓▒▒▓██████████▓▒░░░▒▓██████████▓▒▒▓█
                                ..█▓▒░▒▓███████▓▓▄▀░░▀...▄▓▓███████▓▒▒▓█
                                ....█▓▒░▒▒▓▓▓▓▄▄▄▀▒░░░░░▒▀▄▄▄▓▓▓▓▒▒░▓█
                                ......█▓▒░▒▒▒▒░░░░░░▒▒▒▒░░░░░░▒▒▒▒░▒▓█
                                ........█▓▓▒▒▒░░██░░▒▓██▓▒░░██░░▒▒▒▓▓█
                                ........▀██▓▓▓▒░░▀░▒▓████▓▒░▀░░▒▓▓▓██▀
                                ............░▀█▓▒▒░░░▓█▓▒▒▓█▓▒░░▒▒▓█▀░
                                ...........█░░██▓▓▒░░▒▒▒░▒▒▒░░▒▓▓██░░█
                                ............█▄░░▀█▓▒░░░░░░░░░░▒▓█▀░░▄█
                                .............█▓█░░█▓▒▒▒░░░░░▒▒▒▓█░░█▓█
                                .............▐█▓█░░█▀█▓▓▓▓▓▓█▀░░█░█▓█▌
                                ...............█▓▓█░█░█░█▀▀▀█░█░▄▀░█▓█
                                .............. █▓▓█░░▀█▀█░█░█▄█▀░░█▓▓█
                                ................█▓▓█░░░░▀▀▀▀░░░░░█▓▓█
                            </p>
                            <Ponteiro mensagem={`Bem-vindo ${username} X)`} user={'ADM'}/>
                        </>
                    ) : null
                }
                {mensagem.map((item, index) => (
                    <Ponteiro key={index} user={item.user} mensagem={item.message} />
                ))}
            </div>
            <div className="flex gap-2 items-center py-2 h-fit w-full">
                <input 
                    value={sms} 
                    onChange={(e) => setSms(e.target.value)} 
                    onKeyPress={handleKeyPress} 
                    type="text" 
                    className="border-2 border-zinc-800 rounded-md p-2 w-full" 
                />
                <button 
                    onClick={enviarMensagem} 
                    className="p-2 rounded-md shadow-xl text-white bg-zinc-800 border-zinc-700 active:bg-zinc-700 active:shadow-inner"
                >
                    <PaperPlaneTilt size={32} />
                </button>
            </div>
        </div>
    )
}
