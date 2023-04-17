import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Yoruka Website</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-brasil_53876-27017.jpg`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Português BR
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
<div className="py-1"></div>
<a href="https://top.gg/bot/845347669227470858">
  <img src={"https://top.gg/api/widget/servers/845347669227470858.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/845347669227470858">
  <img src={"https://top.gg/api/widget/upvotes/845347669227470858.svg"}/>
</a>
<div className="py-1"></div>
<a href="https://top.gg/bot/845347669227470858">
  <img src={"https://top.gg/api/widget/owner/845347669227470858.svg"}/>
</a>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Links</p>
                            <div>
                                <Link href="https://top.gg/bot/845347669227470858">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Vote na Yoruka pelo Top.gg
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://dsc.gg/animesworld" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Servidor de suporte
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/api/oauth2/authorize?client_id=845347669227470858&permissions=40581035584592&scope=bot%20applications.commands" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Adicionar bot no servidor
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Social</p>
                            <div>
                                <Link href="https://dsc.gg/animesworld">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/CroneGamesPlays/yorukawebsite">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-github`} /> GitHub 
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://youtube.com/c/CroneGamesPlaysOficial">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Importante</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Termos de serviço
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Política de privacidade
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Yoruka Website
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot Online 24h
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"CroneGamesPlays#9901 ❤️ - Obrigado por acessar o website da Yoruka!"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
