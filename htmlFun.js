// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
//!this is just added to force a commit

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w("#elementID")

    // Click "Preview" to run your code
    console.log("onReady");
});

//<HTML Fun>
export function htmlFunButton_click(event) {
    // This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
    // Add your code for this event here:
    let classesWeekOne = Math.floor(Math.random() * 4)
    let classesWeekTwo = Math.floor(Math.random() * 4)
    let dlStyle = "\"font-size: 16px; font-family : 'Avenir Black'; background-color: yellow;\"";
    let dhStyle = "color: blue; text-decoration: underline; line-height: 1";
    let ddStyle = "color: green; text-indent: 55px;";

    //<Week 1>
    $w("#oneOneSwitch").hide();
    $w("#oneTwoSwitch").hide();
    $w("#oneThreeSwitch").hide();
    let htmlWeekOne = "<dl style=" + dlStyle + ">"
        + "<dh style='" + dhStyle + "'>Week 1: June 7-11 2021</dh>";
        if (classesWeekOne >= 1) {
            htmlWeekOne += "<dd style='" + ddStyle + "'>Drone Academy</li></dd>";
            $w("#oneOneSwitch").show();
            $w("#oneOneSwitch").checked = false;
        }
        if (classesWeekOne >= 2) {
            htmlWeekOne += "<dd style='" + ddStyle + "'>Gadgets & Gizmos</li></dd>";
            $w("#oneTwoSwitch").show();
            $w("#oneTwoSwitch").checked = false;
        }
        if (classesWeekOne >= 3) {
            htmlWeekOne += "<dd style='" + ddStyle + "'>Forsensics</li></dd>";
            $w("#oneThreeSwitch").show();
            $w("#oneThreeSwitch").checked = false;
        }
        htmlWeekOne += "</dl>"
            ;
    $w("#htmlFunTextOne").html = htmlWeekOne;
    //</Week 1>

    //<Week 2>
    $w("#twoOneSwitch").hide();
    $w("#twoTwoSwitch").hide();
    $w("#twoThreeSwitch").hide();
    let htmlWeekTwo = "<dl style=" + dlStyle + ">"
        + "<dh style='" + dhStyle + "'>Week 2: June 14-18 2021</dh>";
        if (classesWeekTwo >= 1) {
            htmlWeekTwo += "<dd style='" + ddStyle + "'>From Ada Lovelace to Grace Hopper</li></dd>";
            $w("#twoOneSwitch").show();
            $w("#twoOneSwitch").checked = false;
        }
        if (classesWeekTwo >= 2) {
            htmlWeekTwo += "<dd style='" + ddStyle + "'>Playing Bongo's Like Richard Feynman</li></dd>";
            $w("#twoTwoSwitch").show();
            $w("#twoTwoSwitch").checked = false;
        }
        if (classesWeekTwo >= 3) {
            htmlWeekTwo += "<dd style='" + ddStyle + "'>The Eels and the Multiverse Theory</li></dd>";
            $w("#twoThreeSwitch").show();
            $w("#twoThreeSwitch").checked = false;
        }
        htmlWeekTwo += "</dl>"
            ;
    $w("#htmlFunTextTwo").html = htmlWeekTwo;
    //</Week 2>



    $w("#htmlFunAlert").value = "Applying the almost unused HTML construct called 'Data Lists' ('<dl>') to the simple Camping List Text to the Dynamic Content for Weeks 1 & 2 of Steam Discovery Academy";
}
//</HTML Fun>