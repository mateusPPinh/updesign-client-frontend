import { ArticleProps } from '@app/utils/shared-interfaces';
import {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  useEffect
} from 'react';

interface DataContextType {
  greetings?: string;
  articles?: Array<ArticleProps>;
  fetchArticles?: () => Promise<void>;
}

const DataContext = createContext<DataContextType>({});

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [greetings, setGreetings] = useState<string>('Hello my friend');
  const [articles, setArticles] = useState<Array<ArticleProps>>([]);

  const fetchArticles = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_UMBRIEL_API}/list-articles`
    );
    const data = await res.json();
    setArticles(data.articles || []);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const valueMemozy = useMemo(
    () => ({
      greetings,
      setGreetings,
      articles,
      fetchArticles
    }),
    [greetings, articles]
  );

  return (
    <DataContext.Provider value={valueMemozy}>{children}</DataContext.Provider>
  );
};

export default DataContext;
