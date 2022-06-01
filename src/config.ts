/* Configuration constants */

const SUGGESTIONS = {
  header: 'How it could be resolved:',
  errors: {
    'io-error': "- Fix path if it's not correct.",
    'http-error': "- Fix url link if it's not correct.",
    'source-error':
      '- Fix data contents (e.g. change JSON data to array or arrays/objects).',
    'scheme-error': '- Fix data scheme (e.g. change scheme from `ftp` to `http`).',
    'format-error': '- Fix data format (e.g. change file extension from `txt` to `csv`).',
    'encoding-error': "- Fix data source if it's broken.",
    'blank-header':
      '- Add the missing column name to the first row of the data source.\n - If the first row starts with, or ends with a comma, remove it.',
    'duplicate-header':
      '- Add the missing column name to the first row of the data.\n - If the first row starts with, or ends with a comma, remove it.',
    'blank-row': '- Delete the row.',
    'duplicate-row':
      '- If some of the data is incorrect, correct it.\n - If the whole row is an incorrect duplicate, remove it.',
    'extra-value': '- Check data has an extra comma between the values in this row.',
    'missing-value':
      '- Check data is not missing a comma between the values in this row.',
    'schema-error': '- Update schema descriptor to be a valid descriptor',
    'non-matching-header': '- Rename header in the data source or field in the schema',
    'extra-header':
      '- Remove the extra column from the data source or add the missing field to the schema',
    'missing-header':
      '- Add the missing column to the data source or remove the extra field from the schema',
    'type-or-format-error':
      '- If this value is not correct, update the value.\n - If this value is correct, adjust the type and/or format.',
    'required-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove the `required` constraint from the schema.',
    'pattern-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `pattern` constraint in the schema.',
    'unique-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then the values in this column are not unique. Remove the `unique` constraint from the schema.',
    'enumerable-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `enum` constraint in the schema.',
    'minimum-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `minimum` constraint in the schema.',
    'maximum-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `maximum` constraint in the schema.',
    'minimum-length-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `minimumLength` constraint in the schema.',
    'maximum-length-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `maximumLength` constraint in the schema.',
  },
}

export default SUGGESTIONS
import { IDict } from './common'

// General

export const IS_BROWSER = typeof window !== 'undefined'

// Schema

export const FIELD_TYPES_AND_FORMATS: IDict<string[]> = {
  string: ['default', 'email', 'uri', 'binary', 'uuid'],
  number: ['default'],
  integer: ['default'],
  boolean: ['default'],
  object: ['default'],
  array: ['default'],
  date: ['default', 'custom', 'any'],
  time: ['default', 'custom', 'any'],
  datetime: ['default', 'custom', 'any'],
  year: ['default'],
  yearmonth: ['default'],
  duration: ['default'],
  geopoint: ['default', 'array', 'object'],
  geojson: ['default', 'topojson'],
  any: ['default'],
}
