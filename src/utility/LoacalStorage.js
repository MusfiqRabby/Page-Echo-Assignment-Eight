
const getStoredBook = () => {

    const storedBookApply = localStorage.getItem('book-apply')
    if(storedBookApply){
        return JSON.parse(storedBookApply);
    }
    return [];
}

const saveApplyBook = bookId =>{
    const storedBookApplys = getStoredBook();
    const exists = storedBookApplys.find(booklist  => booklist == bookId)
    console.log(bookId, storedBookApplys);
    if(!exists){
        storedBookApplys.push(bookId);
        localStorage.setItem('book-apply', JSON.stringify(storedBookApplys))
    }
}


export { getStoredBook, saveApplyBook }