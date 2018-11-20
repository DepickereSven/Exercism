function isLeapYear(year:number) : boolean {
    if (year % 4 == 0){
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default isLeapYear