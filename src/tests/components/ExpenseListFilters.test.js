import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altfilters } from '../fixtures/filters'

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper

beforeEach(() => {
    setTextFilterSpy = jest.fn()
    sortByDateSpy = jest.fn()
    sortByAmountSpy = jest.fn()
    setStartDateSpy = jest.fn()
    setEndDateSpy = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByAmount={sortByAmountSpy}
        sortByDate={sortByDateSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
    />
    )
})

test('Render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Render ExpenseListFilters with Alt Values', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should Handle Text Change', () => {
    const value = altfilters.text
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})

test('Should Sort By Date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDateSpy).toHaveBeenCalled()
})

test('Should Sort By Amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmountSpy).toHaveBeenCalled()
})


test('Should Handle Date Change', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)

})

test('Should Handle Date Focus Change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)

})