// Text Filter 
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// Date Filter
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Amount Filter
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// Start Date filter
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate }