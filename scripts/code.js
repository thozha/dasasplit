
$('.cbDate').combodate({
    format: "DD-MM-YYYY HH:mm:ss",
    template: "D / MMM / YYYY H : mm : ss",
    smartDays: true,
    value: new Date(),
    maxYear: 2030,
    minuteStep : 1
});
var grahas = [
    {
        "ID": "1",
        "Txt": "கேது",
        "SEC": "0.05834305718"
    },
    {
        "ID": "2",
        "Txt": "சுக்கிரன்",
        "SEC": "0.1664721898"
    },
    {
        "ID": "3",
        "Txt": "சூரியன்",
        "SEC": "0.05017502917"
    },
    {
        "ID": "4",
        "Txt": "சந்திரன்",
        "SEC": "0.0832360949"
    },
    {
        "ID": "5",
        "Txt": "செவ்வாய்",
        "SEC": "0.05834305718"
    },
    {
        "ID": "6",
        "Txt": "ராகு",
        "SEC": "0.1501361338"
    },
    {
        "ID": "7",
        "Txt": "குரு",
        "SEC": "0.1334111241"
    },
    {
        "ID": "8",
        "Txt": "சனி",
        "SEC": "0.1583041618"
    },
    {
        "ID": "9",
        "Txt": "புதன்",
        "SEC": "0.1415791521"
    }
];
$("#perform").click(function () { getDasa(); });
function getDasa() {
    var a = $("#startDate").combodate('getValue', null);
    var b = $("#endDate").combodate('getValue', null);
    a = new Date(a);
    b = new Date(b);

    var diff = b.getTime() - a.getTime();

    var diffSeconds = diff / 1000;

    startDasa = parseInt($("#deha").val());

    var arr1 = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9");
    var arr2 = new Array("2", "3", "4", "5", "6", "7", "8", "9", "1");
    var arr3 = new Array("3", "4", "5", "6", "7", "8", "9", "1", "2");
    var arr4 = new Array("4", "5", "6", "7", "8", "9", "1", "2", "3");
    var arr5 = new Array("5", "6", "7", "8", "9", "1", "2", "3", "4");
    var arr6 = new Array("6", "7", "8", "9", "1", "2", "3", "4", "5");
    var arr7 = new Array("7", "8", "9", "1", "2", "3", "4", "5", "6");
    var arr8 = new Array("8", "9", "1", "2", "3", "4", "5", "6", "7");
    var arr9 = new Array("9", "1", "2", "3", "4", "5", "6", "7", "8");

    eval("var myArr = arr" + startDasa);
    $("#result").html("");
    $("#result").append("<table>");
    incrementDate = a;
    for (i = 0; i <= myArr.length; i++) {
        $("#result").append("<tr>");
        $.each(grahas, function (key, val) {
            {
                if (myArr[i] == val.ID)
                {
                    percnt = parseFloat(val.SEC);
                    seconds = diffSeconds * percnt
                    

                    $("#result").append("<td>" + val.Txt + "</td>");
                    $("#result").append("<td>" + incrementDate + "</td>");
                    incrementDate = moment(incrementDate).add(seconds, 's').toDate();
                    $("#result").append("<td>" + incrementDate + "</td>");
                }
            }
        });
        $("#result").append("</tr>");
    }
    $("#result").append("</table>");
}
