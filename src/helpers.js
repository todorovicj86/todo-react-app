function findProp(array, valueTarget, id, prop){
    const index = array.findIndex(item => item.id === id);
    const el = array[index];

    el[prop]= valueTarget;
    const newArray = array;
    newArray[index] = el;
    
    return newArray;

}

export {findProp};