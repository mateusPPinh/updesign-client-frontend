import { ArticleProps, PageProps } from '@app/utils/shared-interfaces';
import { PageBlock } from '@umbriel/components';
import { BlockData } from '@app/utils/shared-types';
import { Wrapper } from './Wrapper.styles';

type HomeProps = {
  pageData: PageProps;
  articles: ArticleProps[];
  pageblockData: BlockData[];
};

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <div id="projetos" className="flex flex-wrap mb-[40px]">
        <Wrapper>
          <PageBlock blocksData={props.pageblockData} />
        </Wrapper>
      </div>
    </div>
  );
}
