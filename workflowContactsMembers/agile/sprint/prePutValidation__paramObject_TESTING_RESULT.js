let testParamObject = {};
testParamObject.errors = 
​​​​​​
​​​[ [ [ '#phemValueEM' ], [ 'NO_AT' ] ],​​​
​​​  [ [ '#phemValueEM' ], [ 'AT_ZERO' ] ],​​​
​​​  [ [ '#phemValueEM' ], [ 'NO_DOT' ] ],​​​
​​​  '#phemValuePH',​​​
​​​  '#phemValuePH',​​​
​​​  '#labelKey',​​​
​​​  '#addrssStreetAddress',​​​
​​​  '#addrssCity',​​​
​​​  '#addrssCity',​​​
​​​  [ [ '#addrssPostalCode' ], [ 'LENGTH' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'NON_DIGITS' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'LENGTH' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'NON_DIGITS' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'NON_DIGITS' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'LENGTH' ] ],​​​
​​​  [ [ '#addrssPostalCode' ], [ 'NON_DIGITS' ] ] ]​​​;
​​​​​​
​​​testParamObject.UnExpectedResultArray =  ​​​
​​​​​​
​​​[ { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'richard@feynman@steamda.com',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'multiple ATs',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis failed: UnExpected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '(612) 625-5000 ext 778',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'extension example main: reason to NOT limit to 10',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis failed: UnExpected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDoValidate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '625-5000 ext.728',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'no area code, three digit extension: reason to NOT RegEx otherwise valid',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis failed: UnExpected \'isValid\' testResult: true' } ]​​​;
​​​​​​
​​​testParamObject.ExpectedHypothesisFalseResultArray =  ​​​
​​​​​​
​​​[ { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'richard.feynmansteamda.com',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'No AT (@)',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: '@steamda.com',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'AT (@) at beginning',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'richard.feynman@steamdacom',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'No DOT (.) after AT',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '315-287-257',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'too few characters (oops! keystroke for last digit fails)',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'labelKeys',​​​
​​​    labelKey: '',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'just an empty string',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '55805',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'streetAddress is empty',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: '',​​​
​​​    postalCode: '55805',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'city is 5 spaces (as empty)',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: '',​​​
​​​    postalCode: '5580Z',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'city empty, zip nondigits ',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '558055',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'Zip too many Digits',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '5580 5',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'Zip too many characters with internal space',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: 'Z55805',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'Zip too many characters with non-digit before',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '5580O',​​​
​​​    isValidHypothesis: false,​​​
​​​    scenarioDescr: 'Zip 5 characters with 1 non-digit after (capital o for fun)',​​​
​​​    isValid: false,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: false' } ]​​​;
​​​​​​
​​​testParamObject.ExpectedHypothesisTrueResultArray =  ​​​
​​​​​​
​​​[ { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'bradlowry@gmail.com',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'my email',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'brad.lowry@gmail.com',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'my email with early DOT',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'emails',​​​
​​​    email: 'tim.walz@governor.us.mn.gov',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'Gov. Walz with multiple DOTs',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '3152872578',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'just ten digits',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '315-287-2578',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'simple common formatting',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '(315) 287-2578',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'more formal common formatting',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'phones',​​​
​​​    phone: '3# 1! 5% 2@ 8* 7& 2@ 5% 7& 8*',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'crazy extra characters',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'labelKeys',​​​
​​​    labelKey: 'HAPPY',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'just a word',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '55805',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: 'My Addres (just validated data)',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' },​​​
​​​  { action: 'preDo Validate',​​​
​​​    kind: 'addresses',​​​
​​​    addrssStreetAddress: '315 N 3rd Ave E #101',​​​
​​​    city: 'Duluth',​​​
​​​    postalCode: '55805',​​​
​​​    isValidHypothesis: true,​​​
​​​    scenarioDescr: '5 spaces before address, after city and either side of zip',​​​
​​​    isValid: true,​​​
​​​    testHypothesisResult: true,​​​
​​​    resultDescr: 'Hypothesis succeeded: Expected \'isValid\' testResult: true' } ]​​​;
