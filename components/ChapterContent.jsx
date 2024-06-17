import React from 'react';

const ChapterContent = ({ cap, activeTitle, convertToHTML, contentId }) => {
  // console.log('contentId', contentId);

  return (
    <article key={cap.id} className="article">
      {activeTitle === cap.id && (
        <>
          <h1>{cap.attributes.title}</h1>
          <div className='center-textArticle'>{cap.attributes.subtitle}</div>

          
          {cap.attributes.conteudo.find(item => item.id === contentId) && ( // Verifica se o conteúdo com o contentId existe
            <div className="bd-content ps-lg-2">
              {/* <div>{cap.attributes.conteudo.find(item => item.id === contentId).id}</div> */}
              <div className='center-textArticle'>{cap.attributes.conteudo.find(item => item.id === contentId).titulo_secao}</div>
              <div dangerouslySetInnerHTML={{ __html: convertToHTML(JSON.parse(cap.attributes.conteudo.find(item => item.id === contentId).texto_conteudo)) }} />
            </div>
          )}
        </>
      )}
    </article>
  );
};

export default ChapterContent;
