class Transcriptor {
    private DNAStrandArr: string[] | undefined;
    private RNATrans: {
        "G": {
            name: "C"
        },
        "C": {
            name: "G"
        },
        "T": {
            name: "A"
        },
        "A": {
            name: "U"
        },
    } | undefined;

    toRna(DNAStrand: string) : string {
        this.DNAStrandArr = [...DNAStrand];
        if (this.DNAStrandArr.length > 1) {
            return this.translateAllElements(this.DNAStrandArr).toString()
        } else {
            return this.RNATrans[this.DNAStrandArr[0]].name
        }
    }

    translateAllElements(DNAStrandArr: string[]) : string[] {
        this.DNAStrandArr = DNAStrandArr;
        return ['test'];
    }
}

export default Transcriptor