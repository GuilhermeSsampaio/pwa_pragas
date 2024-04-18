import Link from 'next/link';
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, handleCloseResults }) => {
  const mappedResults = results.map(item => ({
    ...item,
    chapterId: item.id // Supondo que o id seja equivalente ao chapterId
  }));

  const handleResultClick = () => {
    handleCloseResults();
  };

  return (
    <div className="results-list" onClick={handleResultClick}>
      {mappedResults.map((result, index) => (
        result && result.id && (
          <Link className='result-link' href={`/sumario?activeChapter=${result.chapterId}#capitulo_${result.chapterId}`} key={index} passHref>
            <SearchResult result={result} />
          </Link>
        )
      ))}
    </div>
  );
};
