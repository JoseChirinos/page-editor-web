export const getUrl = {
  parts: (url) => {
    let match = String(url).split('/'),
      routeNow = "",
      routes = []
    match.forEach((i, index) => {
      if (index === 0) {
        routeNow += i
      } else {
        routeNow += "/" + i
      }
      routes.push({
        path: i === "" ? "/" : routeNow,
        title: i === "" ? "principal" : i
      })
    })
    return routes
  },
  back: (url) => {
    let urlList = getUrl.parts(url)
    let urlBack = urlList[urlList.length - 2]
    return urlBack
  }
}