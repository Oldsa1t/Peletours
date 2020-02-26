$(document).ready(() => {

    moduleTrip.init();

})

var moduleTrip = {

    init: function () {
        $('.trip-details__daterangepicker').daterangepicker({
            "locale": {
                "format": "MM/DD/YYYY",
                "separator": " - ",
                "applyLabel": "להחיל",
                "cancelLabel": "לבטל",
                "fromLabel": "From",
                "toLabel": "To",
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": [
                    "ראשון",
                    "שני",
                    "שלישי",
                    "רביעי",
                    "חמישי",
                    "שישי",
                    "שבת"
                ],
                "monthNames": [
                    "ינואר",
                    "פברואר",
                    "מרץ",
                    "אפריל",
                    "מאי",
                    "יוני",
                    "יולי",
                    "אוגוסט",
                    "ספטמבר",
                    "אוקטובר",
                    "נובמבר",
                    "דצמבר"
                ],
                "firstDay": 1
            }
        });
    }
}
