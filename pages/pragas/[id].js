// Função para buscar os dados da API
export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api-cartilha-teste.onrender.com/api/pragas`);
  const data = await res.json();

  // Verifica se os dados foram retornados corretamente e se existe conteúdo
  if (!data || !data.attributes || !data.attributes.conteudo) {
    return {
      notFound: true, // Se não houver conteúdo, retorna página não encontrada
    };
  }

  // Procura a praga com o ID especificado dentro de conteudo
  const praga = data.attributes.conteudo.find(item => item.id.toString() === id);

  if (!praga) {
    return {
      notFound: true,
    };
  }

  return {
    props: { praga }, // Passa a praga para a página como props
  };
}
