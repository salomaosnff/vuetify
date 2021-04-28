module.exports = {
  'v-skeleton-loader': {
    props: [
      {
        name: 'type',
        example: {
          actions: 'button@2',
          article: 'heading, paragraph',
          avatar: 'avatar',
          button: 'button',
          card: 'image, card-heading',
          'card-avatar': 'image, list-item-avatar',
          'card-heading': 'heading',
          chip: 'chip',
          'date-picker': 'list-item, card-heading, divider, date-picker-options, date-picker-days, actions',
          'date-picker-options': 'text, avatar@2',
          'date-picker-days': 'avatar@28',
          heading: 'heading',
          image: 'image',
          'list-item': 'text',
          'list-item-avatar': 'avatar, text',
          'list-item-two-line': 'sentences',
          'list-item-avatar-two-line': 'avatar, sentences',
          'list-item-three-line': 'paragraph',
          'list-item-avatar-three-line': 'avatar, paragraph',
          paragraph: 'text@3',
          sentences: 'text@2',
          table: 'table-heading, table-thead, table-tbody, table-tfoot',
          'table-heading': 'heading, text',
          'table-thead': 'heading@6',
          'table-tbody': 'table-row-divider@6',
          'table-row-divider': 'table-row, divider',
          'table-row': 'table-cell@6',
          'table-cell': 'text',
          'table-tfoot': 'text@2, avatar@2',
          text: 'text',
        },
      },
    ],
    slots: [
      {
        name: 'default',
        props: undefined,
      },
    ],
  },
}
