import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Report } from '../../src'
import report from '../../data/report-invalid.json'

// Tests

it('should render', () => {
  render(<Report report={report} />)
  expect(screen.getByText('Blank Label')).toBeVisible()
})
