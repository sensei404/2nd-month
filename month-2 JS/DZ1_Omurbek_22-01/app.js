var lang = prompt('Enter language code')
if (lang === 'ru' || lang === 'русский') {
    console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
} else if (lang === 'en') {
    console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'])
} else {
    alert('ERROR');
}



