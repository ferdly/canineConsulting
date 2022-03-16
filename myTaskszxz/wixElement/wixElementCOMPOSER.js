export var wixElement = {
    wId: "FirstNameMissing"
    , source: "PATH OR SOMETHING"
    , title: "LastNameMissing"
    , attributesIncludeStar: false
    , attributesIncludeColumns: []
    // ø above overloaded by Star
    // ø any non-matching Columns SKIPPED: no Danger, no Warning
    , init: function (wId){
                this.wId = wId
                return this
            }
    , includeAttributes: function (star = false, columns = []){
                        this.attributesIncludeStar = star
                        this.attributesIncludeColumns = star ? [] : columns
                    }
    , setDecoration: function (title = 'Title', subTitle = null, longishDescr = null){
                        this.title = title
                        this.subTitle = subTitle
                        this.longishDescr = longishDescr
                    }
}

// ! <PRE_TRASH - BACKUP>
// ! INCLUDE visible and non-visible in query (star)
// ø star overloads visible
// wixElementConfigObject.attributesInclude.columns = [] 
// ! INCLUDE visible PLUS '.columns' in query
// ø naming convention same as SQL module .star is boolean overloads anything
// ø naming convention same as SQL module .custom is a list of attributes
// ø  ø  '.columns' will only APPEND to visible
// ø  ø  '.columns'  any unmatching attributes just ignored => NO ERROR, NO WARNING
// ! <PRE_TRASH - BACKUP/>
