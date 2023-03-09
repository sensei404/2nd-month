var lang = prompt('Выбор языка и дня')
switch (lang) {
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
        break
    case 'en':
        console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'])
        break
    default :
        alert('ERROR')
        break
}
