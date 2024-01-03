module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'plugin:n/recommended',
    'standard-react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/destructuring-assignmen': 'off',
    'react/react-in-jsx-scope': 'off',
    // espacio antes del paréntesis de una función
    'space-before-function-paren': 0,
    // Forzar uso de propTypes (No necesario si usamos typescript)
    'react/prop-types': 'off',
    // Prevenir que existan propTypes sin usar
    'react/no-unused-prop-types': 0,
    // Nomenclatura específica para handlers y props
    'react/jsx-handler-names': 'off',
    // Sintaxis para fragmentos de React -> <></>
    'react/jsx-fragments': 'off',
    // Reglas para importar/exportar módulos
    'import/export': 0,
    // No permitir variables sin usar JS
    'no-unused-vars': 'off',
    // No permitir variables sin usar TS
    '@typescript-eslint/no-unused-vars': 'error',
    // No permitir el uso de comentarios para manejar typescript desde comentarios (@ts-expect-error @ts-ignore @ts-nocheck @ts-check)
    '@typescript-eslint/ban-ts-comment': 'warn',
    // No Permitir interfaces vacías
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        // Permite interfaz vacía si no tiene subtipos
        allowSingleExtends: true
      }
    ],
    // No permitir el uso de any para definir el tipo
    '@typescript-eslint/no-explicit-any': 'off',
    // Uso de comas en arreglos, objetos, imports, exports y funciones
    'comma-dangle': 'off',
    // Forzar el uso de require en módulos con scopes de alto nivel
    'global-require': 'off',
    // Límite de escritura por linea
    'max-len': [
      'error',
      {
        code: 130,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ],
    // Limite de salto de lineas
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    // No permitir el uso de spread como props
    'react/jsx-props-no-spreading': 'off',
    // Ordenar props
    'react/jsx-sort-props': [
      'error',
      {
        // Ignorar mayusculas
        ignoreCase: true,
        // Shorthand siempre al principio
        shorthandFirst: true,
        // Callback siempre al final
        callbacksLast: true,
        // No ordenar alfabéticamente
        noSortAlphabetically: false
      }
    ],
    // No permitir el uso de punto y coma al terminar una linea
    semi: 'off'
  }
}
