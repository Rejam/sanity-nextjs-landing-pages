export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cf821110070192f34c9c66',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-imobpmxc',
                  apiId: '35318c1b-ebec-4860-8e85-ac9802991171'
                },
                {
                  buildHookId: '60cf82116844ff83d24f2baa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-txuno5pd',
                  apiId: '48605037-1bdc-4266-a3a2-083952859a14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rejam/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-txuno5pd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
