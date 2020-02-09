import {createHeader} from "./shared/header";
import {createSidebarNav} from "./shared/sidebarNav";
import {createSelect, closeAllSelect} from "./shared/customSelect";
import {HTMLRender} from "./createPageClass";



export function createReportPage (headerReport, mainReport) {

    /*header*/
    createHeader(headerReport);
    /*end of header*/

    /*sidebarNav*/
    createSidebarNav(mainReport);
    /*end of sidebarNav*/

    //changing sidebar active element
    const sidebarImg = document.getElementById("sidebar-report");
    sidebarImg.className += " sidebar-nav_active";

    const main = document.getElementById("report-main");

    const reportMainWrapper = new HTMLRender({
        tag: "div",
        class: "report-main"
    }).createElement();
    main.appendChild(reportMainWrapper);

    const reportInfo = new HTMLRender({
        tag: "section",
        class: "report-info",
    }).createElement();
    reportMainWrapper.appendChild(reportInfo);

    const reportInfoWrapper = new HTMLRender({
        tag: "div",
        class: "report-info-wrapper"
    }).createElement();
    reportInfo.appendChild(reportInfoWrapper);

    const createDynamicInfo = (id, value, name) => {

        const reportCircleWrapper = new HTMLRender({
            tag: "div",
            class: "report-info__circle-wrapper"
        }).createElement();
        reportInfoWrapper.appendChild(reportCircleWrapper);

        const reportCircle = new HTMLRender({
            tag: "div",
            class: "report-info__circle",
            id: id,
        }).createElement();
        reportCircleWrapper.appendChild(reportCircle);

        const reportCircleSpan = new HTMLRender({
            tag: "span",
            class: "report-info__percent"
        }).createElement();
        reportCircle.appendChild(reportCircleSpan);

        const reportCircleTextWrapper = new HTMLRender({
            tag: "div",
            class: "report-info__text-wrapper"
        }).createElement();
        reportCircleWrapper.appendChild(reportCircleTextWrapper);

        const reportCircleValue = new HTMLRender({
            tag: "h2",
            text: value,
            class: "report-info__value"
        }).createElement();
        reportCircleTextWrapper.appendChild(reportCircleValue);

        const reportCircleText = new HTMLRender( {
            tag: "p",
            text: name,
            class: "report-info__text"
        }).createElement();
        reportCircleTextWrapper.appendChild(reportCircleText);
    };

    const reportCirclesInfoId = ["report-info__views", "report-info__visitors", "report-info__impressions"];
    const reportCirclesValue = ["1300", "800", "3800"];
    const reportCirclesText = ["views", "visitors", "impressions"];

    for (let i = 0; i < 3; i++) {
        createDynamicInfo(reportCirclesInfoId[i], reportCirclesValue[i],reportCirclesText[i]);
    }

    function createCircle (id,value) {
        $(id).circleProgress({
            value: value,
            size: 76,
            fill: {
                color: "#2196f3"
            }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('span').text(stepValue.toFixed(2).substr(2) + "%");
        });
    }

    createCircle("#report-info__views", 0.75);
    createCircle("#report-info__visitors", 0.35);
    createCircle("#report-info__impressions", 0.62);


    const reportFilterWrapper = new HTMLRender({
        tag: "div",
        class: "report-filter"
    }).createElement();
    reportInfo.appendChild(reportFilterWrapper);


    const reportFilterText = new HTMLRender({
        tag: "p",
        class: "report-filter__text",
        text: "Show:"
    }).createElement();
    reportFilterWrapper.appendChild(reportFilterText);

    const customSelect = new HTMLRender({
        tag: "div",
        class: "custom-select"
    }).createElement();
    reportFilterWrapper.appendChild(customSelect);

    const filterSelect = new HTMLRender({tag: "select"}).createElement();
    customSelect.appendChild(filterSelect);


    const createFilterOptions = (value) => {
        const filterOption = new HTMLRender({
            tag: "option",
            value: value,
            text: value
        }).createElement();

        filterSelect.appendChild(filterOption);
    };

    const filterOptions = ["Select Filter", "Week", "Month"];
    for (let i = 0; i < filterOptions.length; i++) {
        createFilterOptions(filterOptions[i]);
    }

    createSelect();
    document.addEventListener("click", closeAllSelect);

    const selectItems = document.getElementById("select-items");
    selectItems.className += " report-select__items";

    const selectSelected = document.getElementById("select-selected");
    selectSelected.className += " report-select__selected";

    const reportGraph = new HTMLRender({
        tag: "section",
        class: "report-graph"
    }).createElement();
    reportMainWrapper.appendChild(reportGraph);

    const reportTable = new HTMLRender({
        tag: "section",
        class: "report-table"
    }).createElement();
    reportMainWrapper.appendChild(reportTable);

    const reportTableWrapper = new HTMLRender({
        tag: "table",
        class: "report-table__tb",
        id: "report-table"
    }).createElement();
    reportTable.appendChild(reportTableWrapper);

    const reportTableHead = new HTMLRender({
        tag: "thead",
        class: "report-table__head"
    }).createElement();
    reportTableWrapper.appendChild(reportTableHead);

    const reportTableHeadWrapper = new HTMLRender({
        tag: "tr"
    }).createElement();
    reportTableHead.appendChild(reportTableHeadWrapper);

    function renderHeadEl (value) {
        const reportTableHeadElements = new HTMLRender({
            tag: "th",
            text: value
        }).createElement();
        reportTableHeadWrapper.appendChild(reportTableHeadElements);
    }

    const tableHeadElements = ["Campaign", "Time", "Views", "Visitors", "CTR", "CPC", "CPV", "CPM", "Status"];
    for (let i = 0; i < tableHeadElements.length; i++) {
        renderHeadEl(tableHeadElements[i]);
    }


    const tableBody = new HTMLRender({
        tag: "tbody",
        class: "report-table__body"
    }).createElement();
    reportTableWrapper.appendChild(tableBody);

    function renderBodyWrapper (array) {

        const tableBodyElemWrapper = new HTMLRender({
            tag: "tr"
        }).createElement();
        tableBody.appendChild(tableBodyElemWrapper);

        function renderBodyEl (value) {
            const reportTableBodyElements = new HTMLRender({
                tag: "td",
                text: value
            }).createElement();
            tableBodyElemWrapper.appendChild(reportTableBodyElements);
        }

        for (let i = 0; i < tableHeadElements.length; i++) {
            renderBodyEl(array[i]);
        }
    }
    const tableBodyElements = ["Lorem ipsum dolor sit amet tetur", "6 days", "358 000", "58 200", "25%", "$3.02", "$2.51", "$28.35", "Active"];
    renderBodyWrapper(tableBodyElements);
    const tableBodyElements2 = ["dolor sit amet tetur", "4 days", "322 000", "15 200", "55%", "$7.02", "$1.51", "$28.35", "Disable"];
    renderBodyWrapper(tableBodyElements2);
    renderBodyWrapper(tableBodyElements2);
    renderBodyWrapper(tableBodyElements2);
    document.getElementsByClassName("dataTables_scrollBody").classList += " custom-scrollbar";


    $(document).ready( function () {
        $('#report-table').DataTable({
            "columnDefs": [
                { "type": "numeric-comma", targets: 3 }
            ],
            "searching": false,
            "paging": false,
            "info": false,
            "order": [],
            "language": {
                "aria": {
                    "sortDescending": ": activate to sort column ascending"
                }
            },
            "scrollY": "219px"
        });
    } );

}