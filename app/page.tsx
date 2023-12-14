import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Bem vindo a Arca. <br />
            <br />
            Guarde com segurança todos os seus arquivos digitais em um só lugar!
          </h1>

          <p className="pb-20">
            Melhore a sua experiência em armazenar o seu acervo digital com a
            Arca, oferecendo uma forma simples e eficiente de realizar upload,
            organizar e acessar arquivos de qualquer lugar. Guarde de maneira
            segura documentos e mídias importantes, e vivencie a fácil
            conveniencia de gerenciar e compartilhar tudo em uma solução
            centralizada.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Teste gratuitamente
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
