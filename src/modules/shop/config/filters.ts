import { TabOptionsConfig } from '@/shared/types/config/tab-options-config';

const filters: TabOptionsConfig = {
  currentOption: {
    name: 'math',
    isPrevious: false,
  },
  options: [
    {
      name: 'math',
      text: 'Matemáticas',
      icon: 'fi-sr-calculator',
    },
    {
      name: 'science',
      text: 'Ciencias',
      icon: 'fi-sr-test-tube',
    },
    {
      name: 'history',
      text: 'Historia',
      icon: 'fi-sr-world',
    },
    {
      name: 'tech',
      text: 'Tecnología',
      icon: 'fi-sr-laptop',
    },
    {
      name: 'biblia',
      text: 'Biblia',
      icon: 'fi-sr-book-alt',
    },
  ],
};

export { filters };
