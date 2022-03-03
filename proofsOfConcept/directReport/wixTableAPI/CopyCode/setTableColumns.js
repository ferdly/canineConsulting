$w("#myTable").columns = [
    {
      "id": "col1",//string • The column ID. • ¿more?
      "dataPath": "field1",//string • The location of the data displayed in the column. • x¡MUCH MORE ON API!
      "label": "Field 1",// string • The column header label.
      "width": 100,//number • The pixel width of the column.
      "visible": true,//boolean • Whether the column is visible.
      "type": "string",//"number", "string", "date", "image", "bool", or "richText".
      "linkPath": "link-field-or-property"//string • 
      //The location of the links used when the items in the column are clicked. • x¡MUCH MORE ON API!
    },
    {
      "id": "col2",
      "dataPath": "field2",
      "label": "Field 2",
      "width": 100,
      "visible": true,
      "type": "image",
      "linkPath": "link-field-or-property"
    },
    {
      "id": "col3",
      "dataPath": "field3",
      "label": "Field 3",
      "width": 100,
      "visible": true,
      "type": "number",
      "linkPath": "link-field-or-property"
    }
  ];