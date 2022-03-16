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
