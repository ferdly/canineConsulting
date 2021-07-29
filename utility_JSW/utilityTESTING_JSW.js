//utilityTESTING.jsw AS utilityTESTING_JSW.js
// .jsw files enable you to write functions that run on the server side

// Test any backend function by clicking the "Play" button on the left side of the code panel

// About testing backend functions: https://support.wix.com/en/article/velo-testing-your-backend-functions

// Sample function

// ø <---------- <doBootstrapMessage UI Back-End>  ---------->
// ø FIND superSeven202107 BOOTSTRAP-MESSAGE
// ! NOTE: this is in 'backend/utility.jsw' and is the future of:
// !       the front-end only 'renderBootstrapMarkdownString()' in postEnrollment.js
export function renderBootstrapMarkdownString(paramObject){
    // export function renderBootstrapMarkdownString(•key,•messageThis = 'DEFAULT', responsiveByLengthToFontSize2dArray = [],txtColor = '#007bff',bgColor = '#FFFFFF'){
        /**
         * Example paramObject
         * paramObject.key = 'danger;
         * * - bootstrap logic/color key
         * paramObject.message = 'The quick brown fox jumps over the lazy dog';
         * * - the thing to be built into Bootstrap-Markdown HTML
         * paramObject.responsiveByLengthToFontSize2dArray = [[-1,18]];
         * * - _do_ see the separate DOX file (renderBootstrapMarkdownString_UI_DOX.js)
         * paramObject.txtColor = '#777';
         * paramObject.bgColor = '#777';
         * * - indicates an Override of the Bootstrap colors for text and back-ground, 
         *         '#777' is only color you can't use as it indicates, No Override 
         *         (use'#777777' instead) 
         *         of course, these will eventually be fully validated, 
         *         but an active, typeof correc, default is best
         *         ø there will be more, as per using a paramObject, 
         *         øø    but that supports the engendering code
         */
    
        // console.log("[fnc]key: " + key)
        let messages = [];
        let messageMatchKey = {};
        messageMatchKey.primary = "0";
        messageMatchKey.success = "1";
        messageMatchKey.warning = "2";
        messageMatchKey.danger = "3";
        messageMatchKey.info = "4";
        messageMatchKey.devel = "5";
        messageMatchKey['key0'] = "primary";
        messageMatchKey['key0'] = "primary";
        messageMatchKey['key1'] = "success";
        messageMatchKey['key2'] = "warning";
        messageMatchKey['key3'] = "danger";
        messageMatchKey['key4'] = "info";
        messageMatchKey['key5'] = "devel";
        messages.push('This is the Primary test message.');
        messages.push('This is the Success test message.');
        messages.push('This is the Waarning test message.');
        messages.push('This is the Danger test message.');
        messages.push('This is the Info test message.');
        messages.push('This is the Devel test message.');
        
        let txtColor = paramObject.txtColor;
        let bgColor = paramObject.bgColor;
        let key = paramObject.key;
        txtColor = key === 'primary' ? '#007bff' : txtColor;
        txtColor = key === 'success' ? '#ffffff' : txtColor;
        bgColor = key === 'success' ? '#28a745' : bgColor;
        // ! <only txtColor setting at this time>
        // txtColor = key === 'warning' ? '#ffc107' : txtColor;
        // bgColor = key === 'warning' ? '#000000' : bgColor;
        // ! OR
        txtColor = key === 'warning' ? '#000000' : txtColor;
        bgColor = key === 'warning' ? '#ffc107' : bgColor;
        // ! </only txtColor setting at this time>
        // ! <could apply to all, but especially the two negative respoinses>
        // txtColor = key === 'danger' ? '#dc3545' : txtColor;
        // bgColor = key === 'danger' ? '#FFFFFF' : bgColor;
        // ! OR
        txtColor = key === 'danger' ? '#FFFFFF' : txtColor;
        bgColor = key === 'danger' ? '#dc3545' : bgColor;
        // ! </could apply to all, but especially the two negative respoinses>
        txtColor = key === 'info' ? '#17a2b8' : txtColor;
        txtColor = key === 'devel' ? '#6610f2' : txtColor;
    
        let indexThis = Number(messageMatchKey[key]);
        let messageThis = paramObject.message === 'DEFAULT' ? messages[indexThis] : paramObject.message;
        
        let length = messageThis.length;
        // ! <make this meaningful by trial and error if it matters>
        // ø below: use something more rigorous than a series of ternary operators, but it is nice an explicit as you are building
        // ø below: Manual and KLUDGE-y
        // ø ø    use responsiveByLengthToFontSize2dArray instead
        // ø but: IIABDFI, so not being removed at this time
        let pixelsByBreakPoint = '36';//just a good value for the original use-case
        // pixelsByBreakPoint = length < 10 ? '36' : pixelsByBreakPoint;
        // pixelsByBreakPoint = length < 50 ? '36' : pixelsByBreakPoint;
        // pixelsByBreakPoint = length < 100 ? '36' : pixelsByBreakPoint;
        // pixelsByBreakPoint = fontSizeOverride === 7 ? pixelsByBreakPoint : fontSizeOverride.toString();
        // ! </make this meaningful by trial and error if it matters>
        let responsiveByLengthToFontSize2dArray = paramObject.responsiveByLengthToFontSize2dArray;
        if(responsiveByLengthToFontSize2dArray.length > 0){
            /**
             * see separate DOX file 
             * here: steamdaWixLocal/steamdaWix/agile/sprint/SevenSuperSteps/doBootstrapMessage_byHtml_UI_DOX.js
             */
            // ! MAYBE: write code to turn positive interger, N, into: [[-1,N]]
    
            let length = -1;
            let fontSize = pixelsByBreakPoint;
             responsiveByLengthToFontSize2dArray.forEach(pair => {
                // console.log(pair);
                length = pair[0];
                fontSize = pair[1];
                if(messageThis.length > length){
                    pixelsByBreakPoint = fontSize;
                }
            });
        }
        
        let style = `font-size: ${pixelsByBreakPoint}px;font-family: Avenir, Arial, Helvetica, sans-serif;background-color:${bgColor};color:${txtColor};text-align:center;`
    
        // ø below: use something other than <p>?
        let html = `<p style="${style}">` + messageThis + `</p>`;
        // $w('#txtBootstrapPrimary').html = html;
        // $w('#txtBootstrapPrimary').expand();
        return html;
    }
    // ø <---------- </doBootstrapMessage UI> ---------->
    
    // ø <---------- <nowISO>  ---------->
    // ø <---------- </nowISO> ---------->
    export function nowISO(paramObject = { alias: 'NOW', timezoneOffset: 0, timezoneAbbrv: 'ZULU' }){
        /** CODE FOR BUILDING DEFAULT PARAMETER
         * paramObject = {};
         * paramObject.alias = 'NOW';
         *     alternate aliases perhaps = ['ROUND_MIDNIGHT_YESTERDAY','ROUND_MIDNIGHT_TODAY']
         *     alternate aliases perhaps += ['NOON_SUNDAY_THIS_WEEK','NOON_MONDAY_THIS_WEEK'...'NOON_SATURDAY_THIS_WEEK']
         *     † 'Round Midnight' means 1 second before midnight, what does Oracle Call it?
         */
        // let getTZabbrv = local.getItem('tzAbbrv');
        // tz = tz === 'ET' ? getTZabbrv : tz;
        let now = new Date();
        // let now = new Date(1960,2,11,23,59,59);
        // let hours = now.getHours() + Number(timezoneOffset);
        // let day = now.getDate();
        // let month = now.getMonth() + 1;
        // let year = now.getFullYear();
        // let monthLast = now.getMonth();
        // let dayLast = 31;
        // // <!!!>
        // dayLast = monthLast === 2? 28 : dayLast;
        // dayLast = monthLast === 2 && year % 4 === 0 ? 29 : dayLast;
        // dayLast = [9,4,6,11].includes(monthLast) ? 30 : dayLast;
        // // </!!!>
        // let dayRollover = hours < 0 ? 1 : 0;
        // day = day - dayRollover;
        // let monthRollover = day < 1 ? 1 : 0;
        // month = month - monthRollover;
        // let yearRollover = month < 1 ? 1 : 0
        // year = year - yearRollover;
        // day = monthRollover === 1 ? dayLast : day;
        let yyyymmddhhiiss = now.getFullYear().toString();
        yyyymmddhhiiss += ('00' + (now.getMonth() + 1).toString()).substr(-2);
        yyyymmddhhiiss += ('00' + now.getDate().toString()).substr(-2);
        let hours = now.getHours() + Number(timezoneOffset);
        // yyyymmddhhiiss += ('00' + now.getHours().toString()).substr(-2);
        yyyymmddhhiiss += ('00' + hours.toString()).substr(-2);
        yyyymmddhhiiss += ('00' + now.getMinutes().toString()).substr(-2);
        yyyymmddhhiiss += ('00' + now.getSeconds().toString()).substr(-2);
        yyyymmddhhiiss += '.' + ('000' + now.getMilliseconds().toString()).substr(-3);
        // if (milliseconds) {
        //     yyyymmddhhiiss += '.' + ('000' + now.getMilliseconds().toString()).substr(-3);
        // }
        yyyymmddhhiiss += ' [' + tz + ']';
        return yyyymmddhhiiss;
        // return 'Hours: ' + hours;
    }
    // ø <---------- </nowISO> ---------->