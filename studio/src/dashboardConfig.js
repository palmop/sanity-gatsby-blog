export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec7c474ce8130f8cd610b79',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9v8ie1zq',
                  apiId: 'd9e5c324-ec91-4b08-b1ab-110641657184'
                },
                {
                  buildHookId: '5ec7c4748203aa9fa762f492',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wh19ug7u',
                  apiId: 'b301570b-9581-46ad-b055-2b08ce362a8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/palmop/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wh19ug7u.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
