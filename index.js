justInvoke = fn => {
  return fn()
}

setThisWithCall = (fn, thisValue, arg) => {
  return fn.call(thisValue, arg)
}

setThisWithApply = (fn, thisValue, arg) => {
  return fn.apply(thisValue, Array.prototype.slice.call(arg))
}

returnNewFunctionOf = (fn, thisValue) =>{
  const newb = fn.bind(thisValue)
  return newb
}
