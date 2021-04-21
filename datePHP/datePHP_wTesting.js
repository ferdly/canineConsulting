/**
 * Return a formated string from a date Object mimicking PHP's date() functionality
 *
 * format  string  "Y-m-d H:i:s" or similar PHP-style date format string
 * date    mixed   Date Object, Datestring, or milliseconds 
 *
 */
supportedCaseOptions = ['j','d','l','w','D','m','n','F','M','Y','y','H','g','h','a','i','s','c'];
appendedCaseOptionsONE = ['\\','S','A','G','O','r'];
phpSupportedFormatElements = ['d','D','j','l','N','S','w','z','W','F','m','M','n','t','L','o','Y','y','a','A','B','g','G','h','H','i','s','u','v','e','I','O','P','p','T','Z','c','r','U'];
supportedCaseOptionsALL = supportedCaseOptions.concat(appendedCaseOptionsONE);
phpSupportedFormatElementsToDo = [];
phpSupportedFormatElements.forEach(element => {
  if (!supportedCaseOptionsALL.includes(element))
  {
    // console.log(element);
    phpSupportedFormatElementsToDo[phpSupportedFormatElementsToDo.length] = element;
  }
});

// console.log(phpSupportedFormatElements.toString());
// console.log(supportedCaseOptionsALL.toString());
console.log(phpSupportedFormatElementsToDo.toString());
let rankedDatePHP_toDo = [
    ['U','Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT): See also time()'],
    ['T','Timezone abbreviation: Examples, EST, MDT'],
    ['z','The day of the year (starting from 0): 0 through 365'],
    ['t','Number of days in the given month: 28 through 31'],
    ['L','Whether it is a leap year: 1 if it is a leap year, 0 otherwise.'],
    ['P','Difference to Greenwich time (GMT) with colon between hours and minutes: Example, +02:00'],
    ['e','Timezone identifier: Examples, UTC, GMT, Atlantic/Azores'],
    ['I','Whether or not the date is in daylight saving time: 1 if Daylight Saving Time, 0 otherwise.'],
    ['v','Milliseconds (added in PHP 7.0.0). Same note applies as for u.: Example, 654'],
    ['u','Microseconds. Note that date() will always generate 000000 since it takes an int parameter, whereas DateTime::format() does support microseconds if DateTime was created with microseconds.: Example, 654321'],
    ['G','24-hour format of an hour without leading zeros: 0 through 23'],
    ['O','Difference to Greenwich time (GMT) without colon between hours and minutes: Example, +0200'],
    ['Z','Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.: -43200 through 50400'],
    ['B','Swatch Internet time (Beat time): 000 through 999']
];
let rankedDatePHP_aliasToDo = [
    ['r','RFC 2822 formatted date: Example, Thu, 21 Dec 2000 16:01:07 +0200'],
];
let isoDatePHP_ToDo = [
    ['N','ISO-8601 numeric representation of the day of the week: 1 (for Monday) through 7 (for Sunday)'],
    ['W','ISO-8601 week number of year, weeks starting on Monday: Example, 42 (the 42nd week in the year)'],
    ['o','ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.: Examples, 1999 or 2003'],
    ['p','The same as P, but returns Z instead of +00:00: Example, +02:00']
];
// console.log(rankedDatePHP_toDo.map(x => x[0]).toString());
// console.log(rankedDatePHP_aliasToDo.map(x => x[0]).toString());
// console.log(isoDatePHP_ToDo.map(x => x[0]).toString());


// console.log(supportedCaseOptionsALL);
//pets.includes('cat')
//<Testing Setup Objects/Arrays>
//  <initialize variables>
let testDateObject = {};
let testFormatObject = {};
let testFormatKeyArray = [];
let testDateKeyArray = []
let testKey = '';
let testDescr = "";
let testDate = new Date();
let testFormat = "";
//  </initialize variables>
//  <testDateObject & testDateKeyArray Elements>
testKey = 'now';
testDateKeyArray.push(testKey);
testDescr = "Current Date-Time (or close enough)";
testDate = new Date();
testDateObject[testKey] = {};
testDateObject[testKey]["descr"] = testDescr;
testDateObject[testKey]["date"] = testDate;
//<====================>
testKey = 'thousandSeconds';
testDateKeyArray.push(testKey);
testDescr = "1000 miliseconds";
testDate = new Date("Jan 1 1970 00:00:01 GMT");
testDateObject[testKey] = {};
testDateObject[testKey]["descr"] = testDescr;
testDateObject[testKey]["date"] = testDate;
//<====================>
testKey = 'bradBday';
testDateKeyArray.push(testKey);
testDescr = "Happy Birthday Brad";
testDate = new Date("March 11, 1960 6:00");
testDateObject[testKey] = {};
testDateObject[testKey]["descr"] = testDescr;
testDateObject[testKey]["date"] = testDate;
//<====================>
testKey = 'leapYearSuceed';
testDateKeyArray.push(testKey);
testDescr = "2/29 on Leap Year";
testDate = new Date("February 29, 2008 12:00 pm");
testDateObject[testKey] = {};
testDateObject[testKey]["descr"] = testDescr;
testDateObject[testKey]["date"] = testDate;
//<====================>
testKey = 'leapYearFail';
testDateKeyArray.push(testKey);
testDescr = "2/29 non Leap Year, still okay as 3/1";
testDate = new Date("February 29, 1961 2:00 pm");
testDateObject[testKey] = {};
testDateObject[testKey]["descr"] = testDescr;
testDateObject[testKey]["date"] = testDate;
//  </testDateObject & testDateKeyArray Elements>
//<========================================>
//  <testFormatObject & testFormatKeyArray Elements>
testKey = 'ISOstr';
testFormatKeyArray.push(testKey);
testDescr = "ISO Full Date-Time";
testFormat = "ISO";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'ISOnum';
testFormatKeyArray.push(testKey);
testDescr = "ISO as Numeric String";
testFormat = "ISO Numeric";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'IMF';
testFormatKeyArray.push(testKey);
testDescr = "Internet Message Format RFC2822";
testFormat = "r";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'ddt';
testFormatKeyArray.push(testKey);
testDescr = "Default Date-Time";
testFormat = "ddt";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'dd';
testFormatKeyArray.push(testKey);
testDescr = "Default Date";
testFormat = "dd";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'dt';
testFormatKeyArray.push(testKey);
testDescr = "Default Time";
testFormat = "dt";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'crsCatDt';
testFormatKeyArray.push(testKey);
testDescr = "Course Catalog Date";
testFormat = "Course Catalog Date";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'calTm';
testFormatKeyArray.push(testKey);
testDescr = "Calendar Time";
testFormat = "Calendar Time";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//<====================>
testKey = 'will';
testFormatKeyArray.push(testKey);
testDescr = "Will opening";
testFormat = "\\O\\n \\t\\h\\i\\s l \\t\\h\\e jS \\d\\a\\y \\o\\f F \\i\\n \\t\\h\\e \\y\\e\\a\\r \\o\\f \\o\\u\\r \\L\\o\\r\\d Y, \\b\\e\\i\\n\\g \\o\\f \\s\\o\\u\\n\\d \\m\\i\\n\\d \\a\\n\\d \\b\\o\\d\\y...";
testFormatObject[testKey] = {};
testFormatObject[testKey]["descr"] = testDescr;
testFormatObject[testKey]["format"] = testFormat;
//  </testFormatObject & testFormatKeyArray Elements>
//<Testing Setup Objects/Arrays>
// console.log(testDateObject);
// console.log(JSON.stringify(testDateObject, undefined, 4));
// console.log(testDateKeyArray);
// console.log(testFormatObject);
// console.log(JSON.stringify(testFormatObject, undefined, 4));
// console.log(testFormatKeyArray);


// formattedDateFromTest = dateFormat(i.date, j.format)
let formatedDatesTestResult = [];
let elementarray = [];
for (let i = 0; i < testDateKeyArray.length; i++) {
	const dateKey = testDateKeyArray[i];
	for (let j = 0; j < testFormatKeyArray.length; j++) {
		const formatKey = testFormatKeyArray[j];
		let dateThis = testDateObject[dateKey]['date'];
		let formatThis = testFormatObject[formatKey]['format'];
		let formattedDateString = dateFormat(formatThis,dateThis)
		elementArray = [];
		elementArray.push(dateKey);
		elementArray.push(formatKey);
		elementArray.push(formattedDateString);
		formatedDatesTestResult.push(elementArray);
		// console.log(elementArray);
	}
}
console.log(formatedDatesTestResult);



function dateFormat(format,date = ""){
	/** 
	 * !NOTES:
	 * ø IF entire format is a Full Date-Time THEN format()
	 * ø IF character count[nCC] is Odd AND 
	 * ø ↪ number of backslashes[nBS] is nBS === floor(nCC/2) THEN Proceed 
	 * ø ELSE push backslashes ('\\') in front 
	 * ø ↪ of any of the Single Charactr Full Date/Time format letters
     */
	//<supported Aliases>
    let formatAlias = format.toLowerCase();
    formatAlias = formatAlias === 'ddt' ? 'default date time' : formatAlias;
    formatAlias = formatAlias === 'dd' ? 'default date' : formatAlias;
    formatAlias = formatAlias === 'dt' ? 'default time' : formatAlias;
    format = formatAlias === 'default date time' ? "F j, Y \\a\\t g:i a" : format;
    format = formatAlias === 'default date' ? "F j, Y" : format;
    format = formatAlias === 'default time' ? "g:i a" : format;
	//<====================>
    format = formatAlias === 'r' ? "D, j M Y G:i:s O" : format;
    format = formatAlias === 'iso' ? "c" : format;
    format = formatAlias === 'iso numeric' ? "C" : format;
	//<====================>
    format = formatAlias === 'course catalog date' ? 'l F jS' : format;
    format = formatAlias === 'calendar time' ? 'h:iA' : format;
    //</supported Aliases>
	
	if(!date || date === "")
	{ 
        date = new Date();
	}
	else if(typeof date !== 'object')
	{
        date = new Date(date.replace(/-/g,"/")); // attempt to convert string to date object	
	}
	
    //<Full Date/Time>
    let fullDateTimeFormatArray = ['c','r','U'];
    if (fullDateTimeFormatArray.indexOf(format) >= 0) {
		if(format === 'c'){
			return date.toISOString()
        }
        if(format === 'r'){
			//CANNOT BE REACHED: Caught at Aliases
            // return date.toISOString()
        }
        if(format === 'U'){
            return date[Symbol.toPrimitive]('number');//date.toISOString()
        }
    }
    //</Full Date/Time>
	var string = '',
		mo = date.getMonth(),   // month (0-11)
		m1 = mo+1,			    // month (1-12)
		dow = date.getDay(),    // day of week (0-6)
		d = date.getDate(),     // day of the month (1-31)
		S = 'th',     // day of the month (1-31)
		y = date.getFullYear(), // 1999 or 2003
		h = date.getHours(),    // hour (0-23)
		mi = date.getMinutes(), // minute (0-59)
		s = date.getSeconds();  // seconds (0-59)
		S = date.getDate() % 20 === 1 ? 'st' : S ;     // day of the month (1-31)
		S = date.getDate() % 20 === 2 ? 'nd' : S ;     // day of the month (1-31)
		S = date.getDate() % 20 === 3 ? 'rd' : S ;     // day of the month (1-31)
		S = date.getDate() === 31 ? 'st' : S ;     // day of the month (1-31)
	
	for (var i = 0, len = format.length; i < len; i++) {
		switch(format[i])
		{
			case '\\': // '\\' is required for checking single back-slash
                i++;
                // console.log(format[i]);
				string+= format[i];
				break;

            case 'j': // Day of the month without leading zeros  (1 to 31)
                string+= d;
                break;

            case 'S': // Capital 'S' is Caridinality of the Day
                string+= S;
                break;
			
			case 'd': // Day of the month, 2 digits with leading zeros (01 to 31)
				string+= (d < 10) ? "0"+d : d;
				break;
			
			case 'l': // (lowercase 'L') A full textual representation of the day of the week
				var days = Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
				string+= days[dow];
				break;
				
			case 'w': // Numeric representation of the day of the week (0=Sunday,1=Monday,...6=Saturday)
				string+= dow;
				break;
				
			case 'D': // A textual representation of a day, three letters
				days = Array("Sun","Mon","Tue","Wed","Thr","Fri","Sat");
				string+= days[dow];
				break;	
			
			case 'm': // Numeric representation of a month, with leading zeros (01 to 12)
				string+= (m1 < 10) ? "0"+m1 : m1;
				break;	
		
			case 'n': // Numeric representation of a month, without leading zeros (1 to 12)
				string+= m1;
				break;
			
			case 'F': // A full textual representation of a month, such as January or March 
				var months = Array("January","February","March","April","May","June","July","August","September","October","November","December");
				string+= months[mo];
				break;
				
			case 'M': // A short textual representation of a month, three letters (Jan - Dec)
				months = Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
				string+= months[mo];
				break;
					
			case 'Y': // A full numeric representation of a year, 4 digits (1999 OR 2003)	
				string+= y;
				break;
				
			case 'y': // A two digit representation of a year (99 OR 03)
				string+= y.toString().slice(-2);
				break;

			case 'G': // 24-hour format of an hour without leading zeros
				string+= h;
				break;
				
			case 'H': // 24-hour format of an hour with leading zeros (00 to 23)
				string+= (h < 10) ? "0"+h : h;
				break;
			
			case 'g': // 12-hour format of an hour without leading zeros (1 to 12)
				var hour = (h===0) ? 12 : h;
				string+= (hour > 12) ? hour -12 : hour;
				break;
				
			case 'h': // 12-hour format of an hour with leading zeros (01 to 12)
				hour = (h===0) ? 12 : h;
				hour = ( hour > 12) ? hour -12 : hour;
				string+= (hour < 10) ? "0"+hour : hour;
				break;
			
            case 'a': // Lowercase Ante meridiem and Post meridiem (am or pm)
                string+= (h < 12) ? "am" : "pm";
				break;		

            case 'A': // Uppercase Ante meridiem and Post meridiem (am or pm)
				string+= (h < 12) ? "AM" : "PM";
				break;		
			
			case 'i': // Minutes with leading zeros (00 to 59)
				string+= (mi < 10) ? "0"+mi : mi;
				break;
			
			case 's': // Seconds, with leading zeros (00 to 59)
				string+= (s < 10) ? "0"+s : s;
				break;
				
			case 'c': // ISO 8601 date (eg: 2012-11-20T18:05:54.944Z)
				string+= date.toISOString();
				break;		
			case 'C': // ISO to Numeric String
				string+= date.toISOString().replace(/[^0-9]/g,'');
				break;		
			case 'O': // Difference to GMT w/o colon between HH and MM
				let diffNumGMT = 0,
				diffSign = '',
				diffHH = '',
				diffMM= '',
				doubleZeros = '00';

				diffNumGMT = date.getTimezoneOffset();
				diffSign += diffNumGMT > 0 ? '-' : '+';
				diffHH = Math.floor(Math.abs(diffNumGMT / 60)).toString();
				diffHH = doubleZeros.concat(diffHH).substr(-2);
				diffMM = (Math.abs(diffNumGMT) % 60).toString();
				diffMM = doubleZeros.concat(diffMM).substr(-2);
				diffGMT = diffSign + diffHH + diffMM;
				// console.log(diffGMT);
				string+= diffGMT;
				break;		
				
			default:
				string+= format[i];
		}
	}

	return string;
}
