import { useState, useEffect } from 'react';
import TableOfContents from './TableOfContents';

const antigo = ({ lista, activeTitle, setActiveTitle }) => {
  const [headerBlocks, setHeaderBlocks] = useState([]);

  useEffect(() => {
    const extractedHeaderBlocks = [];

    lista.forEach((cap) => {
      const blocks = cap.attributes.conteudo.map((item) => {
        return JSON.parse(item.texto_conteudo).blocks;
      }).flat();
      
      blocks.forEach((block) => {
        if (block.type === 'header') {
          extractedHeaderBlocks.push(block);
        }
      });
    });

    setHeaderBlocks(extractedHeaderBlocks);
  }, [lista]);

  const convertToHTML = (data) => {
    let htmlContent = '';

    data.blocks.forEach((block) => {
      switch (block.type) {
        case 'header':
          const anchor = block.data.text.replace(/ /g, "_");
          htmlContent += `<h${block.data.level} class="titulo" id='${anchor}'>${block.data.text}</h${block.data.level}>`;
          break;
        case 'paragraph':
          htmlContent += `<p class="paragrafo">${block.data.text}</p>`;
          break;
        // Adicione outros casos para outros tipos de blocos se necessário
        default:
          break;
      }
    });

    return htmlContent;
  };

  const handleNavigation = (chapterId) => {
    setActiveTitle(chapterId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentIndex = lista.findIndex((cap) => cap.id === activeTitle);
  const prevChapter = lista[currentIndex - 1];
  const nextChapter = lista[currentIndex + 1];

  return (
    <div className="text-with-toc">
      <div className="text-content">
        {lista.map((cap) => (
          <article key={cap.id} className="article">
            {activeTitle === cap.id && (
              <>
                <h1>{cap.attributes.title}</h1>
                {cap.attributes.conteudo.map((item) => (
                  <div key={item.id} className="bd-content ps-lg-2">
                    <div className='center-textArticle'>{item.titulo_secao}</div>
                    <div dangerouslySetInnerHTML={{ __html: convertToHTML(JSON.parse(item.texto_conteudo)) }} />
                  </div>
                ))}
              </>
            )}
          </article>
        ))}
      </div>
      <div className="table-of-contents">
        <TableOfContents headerBlocks={headerBlocks} />
      </div>
      <nav className="pagination-nav docusaurus-mt-lg" aria-label="Páginas de documentação">
        {prevChapter && (
          <button
            className="pagination-nav__link pagination-nav__link--prev"
            onClick={() => handleNavigation(prevChapter.id)}
          >
            <div className="pagination-nav__sublabel">Anterior</div>
            <div className="pagination-nav__label">{prevChapter.attributes.title}</div>
          </button>
        )}
        {nextChapter && (
          <button
            className="pagination-nav__link pagination-nav__link--next"
            onClick={() => handleNavigation(nextChapter.id)}
          >
            <div className="pagination-nav__sublabel">Próxima</div>
            <div className="pagination-nav__label">{nextChapter.attributes.title}</div>
          </button>
        )}
      </nav>
    </div>
  );
};

export default antigo;
