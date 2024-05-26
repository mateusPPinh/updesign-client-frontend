/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic';

const BannerProjects = dynamic(
  () => import('@app/components/shared/BannerProjects')
);

export default function RenderSiteComponents(props: any) {
  /**
   * BaseSwitch monotira do type de cada caso, quando os valores chegarem aqui, devemos usar
   * a prop "component_name" para diferenciar cada componente criado pelo cliente, assim enviando os valores
   * para os arquivos responsáveis pelo tratamento de layout final.
   */
  switch (props.component_name) {
    case 'Banner de Projetos':
      return <BannerProjects {...props} />;
    default:
      return <pre>no data found</pre>;
  }
}
