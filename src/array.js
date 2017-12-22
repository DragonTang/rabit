exports.unique = (array) => {
  const [hash, res] = [{}, []]
  array.forEach((key) => {
    if (!hash[key]) {
      res.push(key)
      hash[key] = true
    }
  })

  return res
}
