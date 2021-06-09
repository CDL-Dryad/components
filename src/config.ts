/* Configuration constants */

const SUGGESTIONS = {
  header: 'How it could be resolved:',
  errors: {
    'io-error': "- Fix path if it's not correct.",
    'http-error': "- Fix url link if it's not correct.",
    'source-error':
      '- Fix data contents (e.g. change JSON data to array or arrays/objects).\n - Set correct source settings in {validator}.',
    'scheme-error':
      '- Fix data scheme (e.g. change scheme from `ftp` to `http`).\n - Set correct scheme in {validator}.',
    'format-error':
      '- Fix data format (e.g. change file extension from `txt` to `csv`).\n - Set correct format in {validator}.',
    'encoding-error':
      "- Fix data source if it's broken.\n - Set correct encoding in {validator}.",
    'blank-header':
      '- Add the missing column name to the first row of the data source.\n - If the first row starts with, or ends with a comma, remove it.\n - If this error should be ignored disable `blank-header` check in {validator}.',
    'duplicate-header':
      '- Add the missing column name to the first row of the data.\n - If the first row starts with, or ends with a comma, remove it.\n - If this error should be ignored disable `duplicate-header` check in {validator}.',
    'blank-row':
      '- Delete the row.\n - If this error should be ignored disable `blank-row` check in {validator}.',
    'duplicate-row':
      '- If some of the data is incorrect, correct it.\n - If the whole row is an incorrect duplicate, remove it.\n - If this error should be ignored disable `duplicate-row` check in {validator}.',
    'extra-value':
      '- Check data has an extra comma between the values in this row.\n - If this error should be ignored disable `extra-value` check in {validator}.',
    'missing-value':
      '- Check data is not missing a comma between the values in this row.\n - If this error should be ignored disable `missing-value` check in {validator}.',
    'schema-error':
      '- Update schema descriptor to be a valid descriptor\n - If this error should be ignored disable schema checks in {validator}.',
    'non-matching-header':
      '- Rename header in the data source or field in the schema\n - If this error should be ignored disable `non-matching-header` check in {validator}.',
    'extra-header':
      '- Remove the extra column from the data source or add the missing field to the schema\n - If this error should be ignored disable `extra-header` check in {validator}.',
    'missing-header':
      '- Add the missing column to the data source or remove the extra field from the schema\n - If this error should be ignored disable `missing-header` check in {validator}.',
    'type-or-format-error':
      '- If this value is not correct, update the value.\n - If this value is correct, adjust the type and/or format.\n - To ignore the error, disable the `type-or-format-error` check in {validator}. In this case all schema checks for row values will be ignored.',
    'required-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove the `required` constraint from the schema.\n - If this error should be ignored disable `required-constraint` check in {validator}.',
    'pattern-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `pattern` constraint in the schema.\n - If this error should be ignored disable `pattern-constraint` check in {validator}.',
    'unique-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then the values in this column are not unique. Remove the `unique` constraint from the schema.\n - If this error should be ignored disable `unique-constraint` check in {validator}.',
    'enumerable-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `enum` constraint in the schema.\n - If this error should be ignored disable `enumerable-constraint` check in {validator}.',
    'minimum-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `minimum` constraint in the schema.\n - If this error should be ignored disable `minimum-constraint` check in {validator}.',
    'maximum-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `maximum` constraint in the schema.\n - If this error should be ignored disable `maximum-constraint` check in {validator}.',
    'minimum-length-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `minimumLength` constraint in the schema.\n - If this error should be ignored disable `minimum-length-constraint` check in {validator}.',
    'maximum-length-constraint':
      '- If this value is not correct, update the value.\n - If value is correct, then remove or refine the `maximumLength` constraint in the schema.\n - If this error should be ignored disable `maximum-length-constraint` check in {validator}.',
  },
}

export default SUGGESTIONS
