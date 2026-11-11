function cleanText(text) {
  return text.trim().toLowerCase()
}

function capitalize(text) {
  const textSlice = cleanText(text)
  return textSlice.slice(0, 1).toUpperCase() + textSlice.slice(1)
}

function formatDisplayName(firstName, lastName) {
  return `${capitalize(firstName)} ${capitalize(lastName)}`
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
