import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    colors: {
      primary: {
        'dark-2': '#337ECC',
        DEFAULT: '#409EFF',
        'lignt-3': '#79BBFF',
        'lignt-5': '#9FCEFF',
        'lignt-7': '#C6E2FF',
        'lignt-8': '#D9ECFF',
        'lignt-9': '#ECF5FF'
      },
      success: {
        'dark-2': '#529B2E',
        DEFAULT: '#67C23A',
        'lignt-3': '#95D475',
        'lignt-5': '#B3E09C',
        'lignt-7': '#D1EDC4',
        'lignt-8': '#E1F3D8',
        'lignt-9': '#F0F9EB'
      },
      warning: {
        'dark-2': '#B88230',
        DEFAULT: '#E6A23C',
        'lignt-3': '#EEBE77',
        'lignt-5': '#F2D09D',
        'lignt-7': '#F8E3C5',
        'lignt-8': '#FAECD8',
        'lignt-9': '#FCF6EC'
      },
      error: {
        'dark-2': '#C45656',
        DEFAULT: '#F56C6C',
        'lignt-3': '#F89898',
        'lignt-5': '#FAB5B5',
        'lignt-7': '#FCD3D3',
        'lignt-8': '#FDE2E2',
        'lignt-9': '#FEF0F0'
      },
      info: {
        'dark-2': '#73767A',
        DEFAULT: '#909399',
        'lignt-3': '#B1B3B8',
        'lignt-5': '#C7C9CC',
        'lignt-7': '#DEDFE0',
        'lignt-8': '#E9E9EB',
        'lignt-9': '#F4F4F5'
      },
      text: {
        DEFAULT: '#303133',
        regular: '#606266',
        secondary: '#909399',
        placeholder: '#A8ABB2',
        disabled: '#C0C4CC'
      },
      fill: {
        darker: '#E6E8EB',
        dark: '#EBEDF0',
        base: '#F0F2F5',
        light: '#F5F7FA',
        lighter: '#FAFAFA',
        'extra-light': '#FAFCFF',
        blank: '#F2F5FC'
      }
    }
  }
}
