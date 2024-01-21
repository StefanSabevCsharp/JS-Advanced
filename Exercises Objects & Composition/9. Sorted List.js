function createSortedList(){

    let data = [];
    function sortList(a,b){
        return a-b;
    }
    function checkIndex(index){
        return index >= 0 && index < data.length;
    }
    

    let sortedList = {
        add: function(num) {
            data.push(num);
           data.sort(sortList);
        },
        get: function(index){
            if(!checkIndex(index)){
                return;
            }
            return data[index];
        },
        remove: function (index){
            if(!checkIndex(index)){
                return;
            }
           data.splice(index,1);
           data.sort(sortList);
        },
        get size(){
            return data.length;
        }
    }
    return sortedList;
}



let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);
list.add(7);
list.add(7);
list.add(7);
console.log(list.size);
list.add(7);
list.add(7);
list.add(7);
list.add(7);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
