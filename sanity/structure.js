// deskStructure.js or structure.js
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('startup').title('Startup'),

    
    ]);
