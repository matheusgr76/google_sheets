function IMPORTJSON(url, query) {
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());

  var path = query.split(".");
  for (var i = 0; i < path.length; i++) {
    json = json[path[i]];
  }
  
  return json;
}
