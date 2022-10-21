export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    },

  ]
}
