interface ParsePageTypeReturn {
  type: 'article' | 'home' | 'editorials';
  departmentSlug: string;
}

/**
 * Analisa o slug para determinar o tipo de página e informações adicionais.
 * 
 * @param slug Pode ser uma string única ou um array de strings representando o caminho.
 * @returns Objeto com o tipo de página e, se aplicável, o slug do departamento.
 */
export function parsePageType(slug: string | string[]): ParsePageTypeReturn {
  // Converter o slug para array se for uma string única
  const parts = typeof slug === 'string' ? slug.split('/') : slug;

  // Extrai o CID de um dado, se aplicável
  function extractCid(data: string) {
    const cidMatch = data.match(/1\..*/);
    return cidMatch ? cidMatch[0] : null;
  }

  // Determina o tipo de página com base no número de partes do slug
  switch (parts.length) {
    case 0:
      return { type: 'home', departmentSlug: '' };
    case 1:
      // Pode ser 'home' se o slug for 'home', caso contrário, trata-se de uma página de editoriais
      if (parts[0] === 'home') {
        return { type: 'home', departmentSlug: '' };
      } else {
        return { type: 'editorials', departmentSlug: parts[0] };
      }
    default:
      // Se houver mais de uma parte, assumimos que é um artigo ou página de conteúdo detalhado
      return { type: 'article', departmentSlug: parts[0] };
  }
}
