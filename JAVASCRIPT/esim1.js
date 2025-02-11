const bookData = [
    {'name' : 'C++','author':'Jim Smith'},
    {'name' : 'Java','author':'Lisa Jones'},
    {'name' : 'MySql','author':'Bob Danieles'}
]
bookData.forEach(row => {
    console.log("kirjailijan nimi on " + row.author+ " ja kirjan nimi on "+ row.name);
    
});
for (let index = 0; index < bookData.length; index++) {
    const element = bookData[index];
    console.log(element);
    
}
