import selectStar from "/Users/brad/Documents/bradRepositories/vsCode/canineConsultingLocal/canineConsulting/myTaskszxz/selectStar_myTaskszxz.json"
import { unCamelCaseString } from "/Users/brad/Documents/bradRepositories/vsCode/utilities/unCamelCase/unCamelCase.js"
import { wixElement } from '/Users/brad/Documents/bradRepositories/vsCode/canineConsultingLocal/canineConsulting/myTaskszxz/wixElement/wixElementCOMPOSER.js'
let wixElementNEW = Object.create(wixElement).init('taskSourceTBL')
// ø <Attributes: INCLUDE> [ in the data in addition to Visible]
// wixElementNEW.includeAttributes(false, ['thisFALSE','thatFALSE','theOtherFALSE']) 
// wixElementNEW.includeAttributes(true, ['thisTRUE','thatTRUE','theOtherTRUE'], true) 
wixElementNEW.includeAttributes(true) 
// ø <Attributes: INCLUDE/>
// ø <setDecoration> [Title and so on]
let title = 'Title String'
let subTitle = 'Sub-Title String'
let longishDescr = 'Longish Description String'
// wixElementNEW.setDecoration(title) 
// wixElementNEW.setDecoration(title,subTitle) 
wixElementNEW.setDecoration(title,subTitle,longishDescr) 
// ø <setDecoration/>

console.warn(`wixElementNEW: [object below][by Object.create().init()]`)
console.log(wixElementNEW)

// ø <tableELementConfigObject>
let tableElementConfigObject = {}
tableElementConfigObject.width = 400
// ø </tableELementConfigObject>
wixElementConfigObject.tableElementConfigObject = tableElementConfigObject

console.warn(`≈15≈!≈ Big Config Object ONE: ONE_TWO_THREE`)
console.warn(`≈16≈!≈ wixElementConfigObject: [object below] [JSON-stringify]`)
console.warn(JSON.stringify(wixElementConfigObject,undefined,4))


let esotericConfigObject = {}
esotericConfigObject.table = {}
esotericConfigObject.table.width = 500
esotericConfigObject.visibleColumnsObject = {}
let visibleColumnObject = {}

// ø <SINGLETON visibleColumnObject>
visibleColumnObject = {}
visibleColumnObject.id = "title"//esoteric so manual, if not in table, then MOOT
visibleColumnObject.label = "Task Name"

visibleColumnObject.width = 100
visibleColumnObject.width = '100px'
visibleColumnObject.width = '30%'

// visibleColumnObject.dataPath = "dataPath"
// visibleColumnObject.linkPath = "linkPath"
// visibleColumnObject.visible = true //necessary?
// visibleColumnObject.type = "type"
// ø <SINGLETON visibleColumnObject>
esotericConfigObject.visibleColumnsObject[visibleColumnObject.id] = visibleColumnObject

visibleColumnObject = {}
visibleColumnObject.id = "doggyDOB"//esoteric so manual, if not in table, then MOOT
visibleColumnObject.label = "Dog Date of Birth"
visibleColumnObject.width = 100
// visibleColumnObject.dataPath = "dataPath"
// visibleColumnObject.linkPath = "linkPath"
// visibleColumnObject.visible = true //necessary?
// visibleColumnObject.type = "type"
esotericConfigObject.visibleColumnsObject[visibleColumnObject.id] = visibleColumnObject

// console.warn(JSON.stringify(selectStar,undefined,4))

console.warn(`≈46≈!≈ Big Config Object TWO:  ONE_TWO_THREE`)
console.warn(`≈47≈!≈ esotericConfigObject: [object below] [JSON-stringify]`)
console.warn(JSON.stringify(esotericConfigObject,undefined,4))

let configObject = {}

configObject.versioning = {}
configObject.versioning.major = 1
configObject.versioning.minor = 0
configObject.versioning.patch = 0
// configObject.versioning.isoStamp = 'ISO'
// let date = new Date()
// configObject.versioning.isoStamp = date.toString()
configObject.versioning.isoStamp = (new Date()).toISOString()

configObject.source = {}
configObject.source.name = 'STRING'
configObject.source.kind = 'STRING'
configObject.source.fullPath = 'STRING'
configObject.source.codePath = 'STRING'
configObject.source.codePathDescr = 'STRING'
configObject.source.attributes = []
configObject.source.count = 777
configObject.source.throttle = {}
configObject.source.throttle.insert = 777
configObject.source.throttle.delete = 777
configObject.source.selectStar = {}
configObject.source.selectStar.isoExecution = selectStar.timeEndExecution
configObject.source.selectStar.columns = selectStar.payload.data.columns

configObject.target = {}
configObject.target.columns = []

let visibleColumnsObjectKeyArray = Object.keys(esotericConfigObject.visibleColumnsObject)
for (const column of configObject.source.selectStar.columns) {
    let columnIsVisible = visibleColumnsObjectKeyArray.includes(column)
    let visibleColumnKeyArray = []
    if (columnIsVisible) {
        visibleColumnKeyArray = Object.keys(esotericConfigObject.visibleColumnsObject[column])
    }
    let columnElementObject = {}
    columnElementObject.id = column
    columnElementObject.dataPath = 'dataPathFAUX'
    columnElementObject.label = unCamelCaseString(column)
    if (visibleColumnKeyArray.includes('label')) {
        // console.warn(`visibleColumnKeyArray.includes('label'): ${visibleColumnKeyArray.includes('label')}`)
        columnElementObject.label = esotericConfigObject.visibleColumnsObject[column]['label']
    }
    columnElementObject.type = typeof selectStar.payload.data.rows[0][column]
    columnElementObject.width = -1
    if (visibleColumnKeyArray.includes('width')) {
        // console.warn(`visibleColumnKeyArray.includes('width'): ${visibleColumnKeyArray.includes('width')}`)
        columnElementObject.width = esotericConfigObject.visibleColumnsObject[column]['width']
    }
    columnElementObject.visible = columnIsVisible
    columnElementObject.linkPath = 'linkPathFAUX'
    configObject.target.columns.push(columnElementObject)
}

// configObject.target.columnsDOX =
//     `id
// string

// dataPath
// string

// label
// string

// type
// string

// width
// number

// visible
// boolean

// linkPath
// string`
calculateFinalWidthPixels(esotericConfigObject.visibleColumnsObject, configObject.target.columns, tableElementConfigObject)

console.warn(`≈128≈!≈ Big Config Object THREE:  ONE_TWO_THREE`)
console.warn(`≈129≈!≈ configObject: [object below] [JSON-stringify]`)
console.warn(`≈130≈!≈ => with esotericConfigObject applied`)
console.warn(JSON.stringify(configObject, undefined, 4))

function calculateFinalWidthPixels(visibleColumnsObject = {}, targetColumnsArray = [], tableElementConfigObject = {}) {
    let visibleColumnsObjectKeyArray = Object.keys(esotericConfigObject.visibleColumnsObject)
    let widthPixels = 0
    let widthPercent = 0
    let widthMinusOneCount = 0
    let totalWidthPixels = 0
    let totalWidthPercent = 0
    let totalWidthMinusOneCount = 0
    let totalWidthPixelsRemainder = Number(tableElementConfigObject.width)

    for (const visibleColumnThis of visibleColumnsObjectKeyArray) {
        const targetColumnFound = targetColumnsArray.find((item) => {
            return item.id === visibleColumnThis
        })
        if (targetColumnFound) {
            console.warn(`≈148≈X≈ targetColumnFound: [¿single element array? or ¿element object?]`)
            console.warn(JSON.stringify(targetColumnFound, undefined, 4))
            targetColumnFound.widthOrig = targetColumnFound.width
            widthPixels = 0
            widthPercent = 0
            widthMinusOneCount = 0
            let type = typeof targetColumnFound.width
            if (type === 'string') {
                if (targetColumnFound.width.includes('%')) {
                    if (Number(targetColumnFound.width.replace(/[^0-9\.]/gm, '')) > 0 && Number(targetColumnFound.width.replace(/[^0-9\.]/gm, '')) <= 100) {
                        widthPercent = Number(targetColumnFound.width.replace(/[^0-9\.]/gm, ''))
                        totalWidthPercent += widthPercent
                    } else {
                        widthMinusOneCount = 1
                        totalWidthMinusOneCount += widthMinusOneCount
                    }
                }
                if (targetColumnFound.width.includes('px')) {
                    if (Number(targetColumnFound.width.replace(/[^0-9\.]/gm, '')) > 0 && Number(targetColumnFound.width.replace(/[^0-9\.]/gm, '')) <= totalWidthPixelsRemainder) {
                        widthPixels = Number(targetColumnFound.width.replace(/[^0-9\.]/gm, ''))
                        totalWidthPixels += widthPixels
                    } else {
                        widthMinusOneCount = 1
                        totalWidthMinusOneCount += widthMinusOneCount
                    }
                }
            }
            if (type === 'number'){
                if(targetColumnFound.width <= totalWidthPixelsRemainder ){
                    widthPixels = targetColumnFound.width
                    totalWidthPixels += widthPixels
                }else{
                    widthMinusOneCount = 1
                    totalWidthMinusOneCount += widthMinusOneCount
                }
            }
            if (widthPixels + widthPercent + widthMinusOneCount === 0) {
                widthMinusOneCount = 1
                totalWidthMinusOneCount += widthMinusOneCount
            }
            console.warn(`≈188≈?X≈ targetColumnsArray: [array below]`)
            targetColumnFound.widthPixels = widthPixels
            targetColumnFound.widthPercent = widthPercent
            targetColumnFound.widthMinusOneCount = widthMinusOneCount
        }
    }

    finalizeWidths(targetColumnsArray)
    function finalizeWidths(targetColumnsArray){
        // console.groupCollapsed(`finalizeWidths(visibleColumnsObject)`)
        console.group(`finalizeWidths(targetColumnsArray)`)
        console.warn(`targetColumnsArray [object below][json-stringified]`)
        console.warn(JSON.stringify(targetColumnsArray,undefined,4))
        // return
        // visibleColumnsObjectKeyArray = Object.keys(visibleColumnsObject)
        for (let index = 0; index < targetColumnsArray.length; index++) {
            const targetColumnObject = targetColumnsArray[index]
            if(targetColumnObject.visible){
                targetColumnObject.KeepRemove = 'KEEP'
            }else{
                targetColumnObject.KeepRemove = 'REMOVE'
            }
            // console.warn(`≈213≈!≈ Big Config Object THREE: `)
            console.warn(`≈214≈!≈ targetColumnObject: [object below] [JSON-stringify]`)
            console.warn(`≈215≈!≈ => with KeepRemove applied`)
            console.warn(JSON.stringify(targetColumnObject, undefined, 4))

        }
        console.warn(`groupEnd: finalizeWidths(visibleColumnsObject)`)
        console.groupEnd()
    }
}