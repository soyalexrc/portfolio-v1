export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Tittle of skill',
      type: 'string'
    },
    {
      name: 'progress',
      description: 'Percentage of knowledge (kind of)',
      title: 'Progress',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }    },
  ]
}
