
export const cleanString = (name) => {
    let fixedString
    try {
    fixedString = decodeURIComponent(escape(name))
    } catch (e) {
        fixedString = name
    }
    return fixedString
}

