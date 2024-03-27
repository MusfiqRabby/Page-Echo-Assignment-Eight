
const getStoredBook = () => {

    const storedBookApply = localStorage.getItem('book-apply')
    if(storedBookApply){
        return JSON.parse(storedBookApply);
    }
    return [];
}
const getWishdBook = () => {
    const storedBookApply = localStorage.getItem('wish-apply')
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
    const saveApplyWish = bookId =>{
    const storedBookApplys = getWishdBook();
    const exists = storedBookApplys.find(booklist  => booklist == bookId)
    console.log(bookId, storedBookApplys);
    if(!exists){
        storedBookApplys.push(bookId);
        localStorage.setItem('wish-apply', JSON.stringify(storedBookApplys))

    }
    console.log(getWishdBook())
}


// 

export { getStoredBook, saveApplyBook, getWishdBook,saveApplyWish }