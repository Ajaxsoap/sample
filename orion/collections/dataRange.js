DateRangeSchema = new SimpleSchema({
  dateRange: {
    type: [Date],
    label: "Date Range:",
    optional: true,
    autoform: {
      type: "bootstrap-daterangepicker",
      dateRangePickerValue: moment().add(1, 'days').format("DD/MM/YYYY") + " - " + moment().add(3, 'days').format("DD/MM/YYYY"),
      dateRangePickerOptions: {
        dateLimit: { days: 31 },
        minDate: moment().add(-150, 'days'),
        maxDate:moment().add(12, 'months'),
        startDate: moment().subtract(5, 'days'),
        endDate: moment().add(31, 'days'),
        timePicker: false,
        format: 'DD/MM/YYYY',
        timePickerIncrement: 30,
        timePicker12Hour: false,
        timePickerSeconds: false
      }
    }
  },
});
