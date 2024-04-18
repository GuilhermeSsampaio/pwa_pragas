export const SearchResult = ({ result }) => {
  // Verifica se result e result.attributes estão definidos
  if (!result || !result.attributes) {
    return null; // Retorna null se não estiverem definidos
  }

  // Mapeia cada item de conteúdo para um componente SearchResult
  return (
    <div className="search-result">
      {result.attributes.conteudo.map((conteudoItem, index) => (
        <div key={index}>
          {conteudoItem.titulo_secao}
        </div>
      ))}
    </div>
  );
};
