import { useState } from 'react';
import { Download, FolderArchive, Code, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExportBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const [downloadedSite, setDownloadedSite] = useState(false);
  const [downloadedCode, setDownloadedCode] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-petroleo-dark/95 border border-dourado text-dourado hover:bg-dourado hover:text-petroleo-dark px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 font-sans text-xs uppercase tracking-wider transition-all duration-300"
      >
        <FolderArchive size={16} />
        <span>Baixar ZIPs do Site</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100vw-3rem)] sm:w-80 bg-petroleo-dark border-2 border-dourado/80 rounded-2xl shadow-2xl p-5 text-marfim font-sans backdrop-blur-md animate-fade-in">
      <div className="flex items-center justify-between mb-3 border-b border-dourado/20 pb-2">
        <div className="flex items-center gap-2 text-dourado">
          <FolderArchive size={18} />
          <h4 className="font-serif font-bold text-sm uppercase tracking-wide">Exportar Projeto</h4>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-salvia hover:text-marfim transition-colors p-1"
          title="Minimizar"
        >
          <X size={16} />
        </button>
      </div>

      <p className="text-[11px] text-salvia mb-4 leading-relaxed">
        Baixe os arquivos zipados diretamente aqui, sem passar por redirecionamento do chat:
      </p>

      <div className="space-y-2.5">
        {/* Download Option 1: Site Pronto (Hostinger / cPanel) */}
        <a
          href="/akashaterapia-site-pronto.zip"
          download="akashaterapia-site-pronto.zip"
          onClick={() => setDownloadedSite(true)}
          className="flex items-center justify-between gap-2 bg-dourado/15 hover:bg-dourado text-marfim hover:text-petroleo-dark border border-dourado/50 p-3 rounded-xl transition-all duration-200 group text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Sparkles size={16} className="text-dourado group-hover:text-petroleo-dark shrink-0" />
            <div className="min-w-0">
              <span className="block text-xs font-semibold leading-tight truncate">
                1. Site Pronto (Hospedagem)
              </span>
              <span className="block text-[10px] opacity-80 leading-tight">
                Pasta dist (353 KB) - cPanel/Hostinger
              </span>
            </div>
          </div>
          {downloadedSite ? (
            <CheckCircle2 size={16} className="text-emerald-400 group-hover:text-petroleo-dark shrink-0" />
          ) : (
            <Download size={16} className="shrink-0" />
          )}
        </a>

        {/* Download Option 2: Código Fonte (Desenvolvedor / VS Code) */}
        <a
          href="/akashaterapia-codigo-fonte.zip"
          download="akashaterapia-codigo-fonte.zip"
          onClick={() => setDownloadedCode(true)}
          className="flex items-center justify-between gap-2 bg-petroleo/80 hover:bg-dourado/20 text-marfim border border-salvia/30 p-3 rounded-xl transition-all duration-200 group text-left cursor-pointer"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Code size={16} className="text-salvia group-hover:text-dourado shrink-0" />
            <div className="min-w-0">
              <span className="block text-xs font-semibold leading-tight truncate">
                2. Código Fonte Completo
              </span>
              <span className="block text-[10px] text-salvia leading-tight">
                Projeto React/Vite (7.3 MB)
              </span>
            </div>
          </div>
          {downloadedCode ? (
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          ) : (
            <Download size={16} className="shrink-0" />
          )}
        </a>
      </div>

      <div className="mt-3 pt-2 border-t border-dourado/10 flex items-center justify-between text-[10px] text-salvia">
        <span>Pronto para extrair na public_html</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-dourado hover:underline"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
